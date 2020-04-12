const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    //Add db schema here
    exercise: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            distance: { 
                type: Number
            },
            duration: { 
                type: Number
            },
            weight: { 
                type: Number
            },
            sets: { 
                type: Number
            },
            reps: { 
                type: Number
            }
        }
    ],
    date: {
        type: date,
        default: date.now()
    }

});

const Workout = mongoose.model("workout", workoutSchema)
