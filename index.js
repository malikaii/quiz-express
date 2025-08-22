const express = require('express')
const jwt = require('jsonwebtoken')


const app = express()

const collections = [
  {
    title: "Title 1",
    category: "History",
    numOfQuestions: 9,
  },
  {
    title: "Title 2",
    category: "Math",
    numOfQuestions: 5,
  },
  {
    title: "Title 3",
    category: "Science",
    numOfQuestions: 8,
  }
];

app.get("/all-collections", (req, res)=> {

    return res.json(collections)
})




app.listen(3000, (error)=> {
    if(error) console.log("Error connecting to server");
    else {
    console.log("Listening on port 3000");

    }
    
})