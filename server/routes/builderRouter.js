const router = require("express").Router();
const { Block, GameBoard, Category } = require('../db/models')

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
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true })
    console.log(categories);
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/images', async (req, res) => {
  try {
    const images = await Block.findAll({ where: { category_id: 1 }, raw: true });
    console.log(images);
    res.json(images);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/images/:id', async (req, res) => {
  try {
    const category_id = req.params.id;
    console.log(category_id);
    const images = await Block.findAll({ where: { category_id }, raw: true });
    console.log(images);
    res.json(images);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router
