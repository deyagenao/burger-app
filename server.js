// require("dotenv").config();

// Set up express 
var express = require("express");

// PORT variable assigned a value of process.env.PORT for deployment on Heroku, or 8080 to be viewed locally
var PORT = process.env.PORT || 8080;

var app = express();

// Express middleware for serving static files from the public directory 
app.use(express.static("public"));


// Express middleware for parsing data, strings and JSON objects 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import router and give server access to them 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server and listen to client requests 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:", PORT);
});

