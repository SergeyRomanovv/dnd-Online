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
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
