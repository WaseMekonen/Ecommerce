const express = require("express"),
  mongoDb = require("mongodb"),
  mongoClient = mongoDb.MongoClient,
  path = require("path"),
  app = express(),
  clientPath = path.join(__dirname, "..", "client"),
  {
    getAllProduct,
    createProduct,
    updateProductByiD,
    removeProductByID,
  } = require("./routes/products"),
  {
    createNewCarts,
    getCarts,
    addItemToCart,
    removeItemFromCart,
  } = require("./routes/carts"),
  { createNewMessage, getAllmessages } = require("./routes/contact");
const dotenv = require("dotenv");
dotenv.config();
const URL = "mongodb://localhost:27017/";
const PORT = 8080;
// const URL = process.env.MONGO_URL;
// const PORT = process.env.PORT || 8080;

app.use(express.static(clientPath));
app.use(express.json());

mongoClient.connect(URL, (err, mongo) => {
  if (err) {
    console.log(err);
  }
  const db = mongo.db("ecommerce");
  // Products:
  getAllProduct(app, db);
  createProduct(app, db);
  ``;
  updateProductByiD(app, db);
  removeProductByID(app, db);
  // Cart:
  addItemToCart(app, db);
  createNewCarts(app, db);
  getCarts(app, db);
  removeItemFromCart(app, db);
  // Contact:
  createNewMessage(app, db);
  getAllmessages(app, db);
});

app.listen(PORT, () => {
  console.log(`app is listening on port:${PORT}`);
});
