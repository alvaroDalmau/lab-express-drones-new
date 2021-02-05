const express = require('express');

// require the Drone model here
const DronModel = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DronModel.find()
    .then(drones => {
      res.render('drones/list.hbs', { drones });
    })
    .catch(err => {
      console.log('Show drones does not work');
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { myName, myPropellers, myMaxSpeed } = req.body;
  let myNewDrone = {
    name: myName,
    propellers: myPropellers,
    maxSpeed: myMaxSpeed,
  };
  DronModel.create(myNewDrone)
    .then(() => {
      res.redirect('/drones');
    })
    .catch(() => {
      console.log('create dron has failed');
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id;
  DronModel.findById(id)
    .then(dron => {
      res.render('drones/update-form.hbs', { dron });
    })
    .catch(() => {
      console.log('Dron to edit is nor working');
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id;
  const { myName, myPropellers, myMaxSpeed } = req.body;
  let myNewDrone = {
    name: myName,
    propellers: myPropellers,
    maxSpeed: myMaxSpeed,
  };
  DronModel.findByIdAndUpdate({ _id: id }, myNewDrone)
    .then(result => {
      console.log(result);
      res.redirect('/drones');
    })
    .catch(err => {
      console.log('Modify dron does not work');
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  let id = req.params.id;
  DronModel.findByIdAndDelete({ _id: id })
    .then(result => {
      res.redirect('/drones');
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
