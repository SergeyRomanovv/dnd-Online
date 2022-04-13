const router = require("express").Router();
const { Block, GameBoard } = require('../db/models')

router.get("/", async (req, res) => {
  try {
    const allBlocks = await Block.findAll({ raw: true })
    // console.log(allBlocks);
    res.json(allBlocks);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/save', async (req, res) => {
  try {
    // console.log('from clienttttttttt', req.body);
    const { board } = req.body;
    const { title } = req.body.boardtitle;
    // console.log(title);
    const mapStringify = JSON.stringify(board)
    const mapSave = await GameBoard.create({ board: mapStringify, title, user_id: 777 })
    // const y = JSON.parse(x)
    // console.log(mapSave)
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

module.exports = router
