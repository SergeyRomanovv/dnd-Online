const router = require("express").Router();
const { Block, GameBoard, Category, User, Attr_category, Attributes } = require('../db/models')


router.get('/', async (req, res) => {
  try {
    const categories = await Attr_category.findAll({ raw: true })
    // console.log(categories);
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/attr', async (req, res) => {
  try {
    const images = await Attributes.findAll({ where: { attr_category_id: 1 }, raw: true });
    // console.log(images);
    res.json(images);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/attr/:id', async (req, res) => {
  try {
    const attr_category_id = req.params.id;
    // console.log(attr_category_id);
    const images = await Attributes.findAll({ where: { attr_category_id }, raw: true });
    // console.log(images);
    res.json(images);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router
