const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    useNewUrlParser: true,
    useFindAndModify: false
});

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
})