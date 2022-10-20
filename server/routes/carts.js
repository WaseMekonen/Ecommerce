const mongoDb = require("mongodb"),
  objectId = mongoDb.ObjectId;

function createNewCarts(app, db) {
  app.post("/carts", (req, res) => {
    // create new cart
    db.collection("carts").insertOne(req.body);
    res.send("Carts has been created!");
  });
}

function getCarts(app, db) {
  app.get("/carts", (req, res) => {
    //  get all carts
    db.collection("carts")
      .find({})
      .toArray((err, cart) => {
        if (err) {
          console.log(err);
        }
        res.send(cart);
        console.log(`${cart.length} produts has been found!`);
      });
  });
}

function addItemToCart(app, db) {
  app.post("carts/:id", (req, res) => {
    const id = objectId(req.params.id);
    const item = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      quantity: req.body.quantity,
    };
    db.collection(`/carts`).insertOne(
      { _id: id },
      { $push: { items: item } },
      (err, product) => {
        if (err) {
          throw err;
        } else {
          console.log(product);
        }
      }
    );
    res.send("item has been added to the cart");
  });
}

function removeItemFromCart(app, db) {
  app.patch("/carts/delete/:id", (req, res) => {
    // delete items from cart
    db.collection("carts").update(
      {},
      { $pull: { products: { _id: objectId(req.params.id) } } },
      (err, cartUpdated) => {
        if (err) {
          throw err;
        }
        console.log(cartUpdated);
        res.send(cartUpdated);
      }
    );
  });
}

module.exports = {
  createNewCarts,
  getCarts,
  addItemToCart,
  removeItemFromCart,
};
