
function createNewMessage(app, db) {
  app.post("/contact", (req, res) => {
    // create message
  db.collection("contact").insertOne(req.body,(err,createdMessage)=>{
    if(err){
      throw err;
    }
    res.send(createdMessage);
  });
  console.log("message has been Created");
})
}


function getAllmessages(app, db) {
  app.get("/contact", (req, res) => {
    //return all products
    db.collection("contact")
      .find({})
      .toArray((err, messages) => {
        if (err) {
          console.log(err);
        }
        res.send(messages);
      });
  });
}

module.exports = { createNewMessage, getAllmessages };
