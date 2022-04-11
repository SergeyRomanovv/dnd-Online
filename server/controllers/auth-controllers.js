const UserService = require('../service/auth-user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-err');

async function registration(req, res, next) {
  console.log(req.body);
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
    }
    console.log(req.body);
    const {userName, email, password} = req.body;
    const userData = await UserService.registration(userName, email, password);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    return res.json(userData);
  }catch(err){
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const {email, password} = req.body;
    const userData = await UserService.login(email, password);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    return res.json(userData);
  }catch(err){
    next(err);
  }
}

async function logout(req, res, next) {
  try {
    const {refreshToken} = req.cookies;
    const token = await UserService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
  }catch(err){
    next(err);
  }
}

async function activate(req, res, next) {
  try {
    const activationLink = req.params.link;
    console.log(activationLink);
    await UserService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  }catch(err){
    next(err);
  }
}

async function refresh(req, res, next) {
  try {
    const {refreshToken} = req.body;
    const userData = await UserService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    return res.json(userData);
  }catch(err){
    next(err);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await UserService.getAllUsers();
    return res.json(users);
  }catch(err){
    next(err);
  }
}

module.exports = {registration, login, logout, activate, refresh, getUsers};
