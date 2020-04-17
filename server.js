const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
const mongojs = require("mongojs")
const Workout = require("./models/workout.js");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:password1@ds249565.mlab.com:49565/heroku_rmtklxx6",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.post("/api/workouts", (req , res) => {
    //console.log (req);
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


// Get All
  app.get("/api/workouts", (req, res) =>{
      Workout.find({} , (err, data) =>{
        if (err) {
            res.send(err)
        }
        res.send(data);
      })      
  });


app.put("/api/workouts/:id", (req, res) =>{
    console.log(req.params.id)
    Workout.findOne({
        _id: mongojs.ObjectId(req.params.id)
        
    }, (err, data) => {

        let addExercise = data.exercises;
        console.log(data)
        addExercise.push(req.body);
        
        db.workouts.updateOne(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                    exercises: addExercise
                }
            }, (err, data2) => {
                if(err) throw err
                res.json(data2);
            }
        )
    })
})
  

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    })
  })

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
})