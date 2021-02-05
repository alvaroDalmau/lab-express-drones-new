// Iteration #1
require('../configs/db.config.js');

const { Mongoose } = require('mongoose');
//require the model
let DroneModel = require('../models/Drone.model.js');

//inserting data
DroneModel.insertMany([
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
])
  .then(result => {
    Mongoose.conection.close();
  })
  .catch(err => {
    console.log('Creation does not work');
  });
