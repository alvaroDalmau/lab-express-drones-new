//conection with mongoose
const mongoose = require('mongoose');

//creating schema
let DroneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

//creating collection
let DroneModel = mongoose.model('myDrones', DroneSchema);

//exporting model
module.exports = DroneModel;
