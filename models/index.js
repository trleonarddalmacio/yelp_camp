const fs = require('fs')
const path = require('path')
const mongoose = require("mongoose");
const db = {};

mongoose.connect("mongodb://localhost/yelp_camp");

fs
  .readdirSync(__dirname)
  .filter((file) => {
    file !== 'index.js'
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))
    db[model.name] = model;
  })

  db.mongoose = mongoose

  module.exports = db;