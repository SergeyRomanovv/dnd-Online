const router = require("express").Router();
const { Block, GameBoard } = require('../db/models')

router.get('/all', async (req, res) => {
  try {
    const allBoardss = await GameBoard.findAll({ raw: true })
    console.log(allBoardss);
    // allBoardss.forEach(el => JSON.parse(el.board))
    res.json(allBoardss);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
