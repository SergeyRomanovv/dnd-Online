const router = require("express").Router();
const { Attributes } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const images = await Attributes.findAll({ where: { attr_category_id: 2 }, raw: true });
    // console.log(images);
    res.json(images);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
