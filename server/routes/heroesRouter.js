const router = require("express").Router();
const { Hiro } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const hiroes = await Hiro.findAll({ raw: true });
    console.log(hiroes);
    res.json(hiroes);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
