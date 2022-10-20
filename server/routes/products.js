const mongoDb = require("mongodb"),
  objectId = mongoDb.ObjectId;

function createProduct(app, db) {
  app.post("/products", (req, res) => {
    // create product
    db.collection("products").insertOne(
      req.body,
      (err, productscCollection) => {
        if (err) {
          throw err;
        }
        res.send(productscCollection);
      }
    );
    console.log("product has been Created");
  });
}

function getAllProduct(app, db) {
  app.get("/products", (req, res) => {
    //return all products
    db.collection("products")
      .find({})
      .toArray((err, col) => {
        if (err) {
          console.log(err);
        }
        res.send(col);
        console.log(`${col.length} produts has been found!`);
      });
  });
}

function updateProductByiD(app, db) {
  app.patch("/products/:id", (req, res) => {
    // get id and new data and update them
    let id = req.params.id;
    const reqBody = req.body;
    console.log(reqBody);
    console.log(id);
    db.collection("products").updateOne(
      { _id: objectId(id) },
      { $set: reqBody },
      (err, updatedItem) => {
        if (err) {
          throw err;
        }
        res.send(updatedItem);
      }
    );
    console.log("item has been updated!!!");
  });
}
function removeProductByID(app, db) {
  app.delete("/products/:id", (req, res) => {
    //  get id and remove product
    const id = req.params.id;
    db.collection("products").findOneAndDelete(
      { _id: objectId(id) },
      (err, deletedItem) => {
        if (err) {
          console.log("item has not been found");
        }
        // res.send(deletedItem);
        console.log(`item with id: ${id} has been Deleted`);
      }
    );
    // console.log(`item with id: ${id} has been Deleted`);
  });
}

module.exports = {
  getAllProduct,
  createProduct,
  updateProductByiD,
  removeProductByID,
};
