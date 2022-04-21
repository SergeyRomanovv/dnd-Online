const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const uuid = require('uuid');
const maillService = require('./auth-mail.service');
const tokenService = require('./auth-token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-err');

class UserService {

  async registration(userName, email, password) {
    const candidate = await User.findOne({where: {email}, raw: true});
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const candidateTwo = await User.findOne({where: { name: userName }, raw: true});
    if (candidateTwo) {
      throw ApiError.BadRequest(`Пользователь с таким логином ${userName} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const activationLink = uuid.v4();
    const user = await User.create({name: userName, email, password: hashPassword, activationLink});
    await maillService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }

  async activate(activationLink) {
    const user = await User.findOne({where: {activationLink}});
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активации');
    }
    user.isActive = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({where: {email}, raw: true});
    if (!user) {
      throw ApiError.BadRequest('Пользователь с таким email не найдет');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals){
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }

  async logout(refreshToken){
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh (refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb){
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({where: {id: userData.id}, raw: true});
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }

}

module.exports = new UserService();
