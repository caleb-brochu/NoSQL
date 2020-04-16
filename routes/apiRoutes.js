const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");

module.exports = function(app){
    router.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    router.get("/api/workouts", (req, res) => {
        mongoose.model('workouts').findOne(function(err, workout){
            res.send(workout)
        })
      });
      
}