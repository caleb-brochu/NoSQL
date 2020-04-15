const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    //Add db schema here
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },

            weight: { 
                type: Number
            },
            sets: { 
                type: Number
            },
            reps: { 
                type: Number
            },
            distance: { 
                type: Number
            },
            duration: { 
                type: Number
            }
        }
    ]

});

module.exports = mongoose.model("Workout", workoutSchema);


