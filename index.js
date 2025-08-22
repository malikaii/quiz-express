const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Collection = require("./Schema/Collection");
const app = express();

const dbURI =
  "mongodb+srv://whymalick:2QzpmO5t2dIBSDEG@express-quiz.f2vxa62.mongodb.net/quiz?retryWrites=true&w=majority&appName=express-quiz";

app.use(express.json());
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    app.listen(3000, (error) => {
      if (error) console.log("Error connecting to server");
      else {
        console.log("Listening on port 3000");
      }
    });
  })
  .catch((err) => {
    console.log("There's an connection err");
  });

app.post("/add-collection", (req, res) => {
  const collectionSet = req.body;

  const newCollectionSet = new Collection( collectionSet );

  newCollectionSet
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/collections", (req, res) => {
  Collection.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
