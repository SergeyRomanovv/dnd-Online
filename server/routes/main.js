const router = require("express").Router();
// const {} = require("../db/models");

router.get("/test", async (req, res) => {
  try {
    res.send('123321');
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});


module.exports = router;
