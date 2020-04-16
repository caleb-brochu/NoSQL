let path = require("path");


module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index"));
    });
    
    app.get("/exercise", function(req, res){
        console.log("new workout")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    app.get("/stats", function(req, res){
        console.log("stats")
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
}