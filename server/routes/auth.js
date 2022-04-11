const router = require("express").Router();
// const {} = require("../db/models");
const {registration, login, logout, activate, refresh, getUsers} = require('../controllers/auth-controllers');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post("/registration",
body('email').isEmail(),
body('password').isLength({min: 3, max: 32}),
registration);

router.post("/login", login);

router.post("/logout", logout);

router.get("/activate/:link", activate);

router.get("/refresh", refresh);

router.get("/users", authMiddleware, getUsers);


module.exports = router;
