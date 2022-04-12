const router = require("express").Router();
const {Block, GameBoard} = require('../db/models')

router.get("/", async (req, res) => {
    const allBlocks = await Block.findAll({raw: true})
    console.log(allBlocks);
    res.json(allBlocks)
});

router.post('/save', async (req, res) => {
    const mapStringify = JSON.stringify(req.body)
    const mapSave = await GameBoard.create({board: mapStringify, user_id: 777})
    // const y = JSON.parse(x)
    // console.log(mapSave)
    res.sendStatus(200)
})

module.exports = router