const jwt = require('jsonwebtoken');
const { Token } = require("../db/models");

class TokenService {


  generateTokens(payload){
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
    return {accessToken, refreshToken,};
  }

  validateAccessToken(token){
    try{
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    }catch (err){
      return null;
    }
  }

  validateRefreshToken(token){
    try{
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    }catch (err){
      return null;
    }
  }

  async saveToken (userId, refreshToken) {
    const tokenData = await Token.findOne({where: {user_id: userId}});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({user_id: userId, refreshToken});
    return token;
  }

  async removeToken(refreshToken){
    await Token.destroy({where: {refreshToken}});
  }

  async findToken(refreshToken){
    const tokenData = await Token.findOne({where: {refreshToken}});
    return tokenData;
  }
}

module.exports = new TokenService();
