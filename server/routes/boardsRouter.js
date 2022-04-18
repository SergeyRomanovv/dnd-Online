const router = require("express").Router();
const { Block, GameBoard, User } = require('../db/models');

router.post('/all', async (req, res) => {
  try {
    const { userName } = req.body
    const user = await User.findOne({where: {name: userName}, raw: true});
    const allBoardss = await GameBoard.findAll({where: {user_id: user.id}});
    res.json(allBoardss);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
