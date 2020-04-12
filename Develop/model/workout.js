const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    //Add db schema 
});

const Workout = mongoose.model("workout", workoutSchema)
