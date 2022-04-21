const router = require("express").Router();
const { User } = require('../db/models');

router.patch('/', async (req, res) => {
  try {
    const name = req.body.user;
    const oneUser = await User.findOne({ where: { name }, raw: true });
    const status = !(oneUser.isGameMaster);
    await User.update({ isGameMaster: status }, {
      where: { name }
     });
    const user = await User.findOne({ where: { name }, raw: true });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('pochemuuuuu', req.body);
    const name = req.body.user;
    const user = await User.findOne({ where: { name }, raw: true });
    console.log('userrrrrrr', user);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
