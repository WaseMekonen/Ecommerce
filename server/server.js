const express = require("express");
const router = require("./router.js");
const path = require("path");
const app = express();
const clientPath = path.join(__dirname, "..", "client");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
// mongoDb = require("mongodb"),
// mongoClient = mongoDb.MongoClient,

dotenv.config();
app.use(express.static(clientPath));
app.use(router);
app.use(express.json());

const { Schema } = mongoose;
const product = new Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  imamge: Array,
  quantity: Number,
});

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

router.get("/products", (req, res) => {
  mongoose.model("produtcs", product).find();
  res.send("this is produts page");
});

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

// // Products:
// getAllProduct(app, db);
// createProduct(app, db);
// updateProductByiD(app, db);
// removeProductByID(app, db);
// // Cart:

// addItemToCart(app, db);
// createNewCarts(app, db);
// getCarts(app, db);
// removeItemFromCart(app, db);

// // Contact:
// createNewMessage(app, db);
// getAllmessages(app, db);

// {
//   getAllProduct,
//   createProduct,
//   updateProductByiD,
//   removeProductByID,
// } = require("./routes/products"),
// {
//   createNewCarts,
//   getCarts,
//   addItemToCart,
//   removeItemFromCart,
// } = require("./routes/carts"),
// { createNewMessage, getAllmessages } = require("./routes/contact");
