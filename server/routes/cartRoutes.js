const mongoDb = require("mongodb");
const objectId = mongoDb.ObjectId;

function createNewcart(app, db) {
  app.post("cart", (req, res) => {
    db.createCollection("cart").insertOne(req.body);
    res.send("cart is created!");
    console.log(req.body);
  });
}

module.exports = {
  createNewcart,
};
