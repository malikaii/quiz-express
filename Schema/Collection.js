const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionsetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  numOfQuestions: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

const Collection = mongoose.model('Collectionset', collectionsetSchema)

module.exports = Collection;