const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("lets build a CRUD API");
});

module.exports = router;
