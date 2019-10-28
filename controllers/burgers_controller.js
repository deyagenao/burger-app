//===========================================================================================
// DEPENDENCIES 
//===========================================================================================

var express = require("express");

// Import the model (burger.js) to use its database functions 
var burger = require("../models/burger");


//===========================================================================================
// ROUTER
//===========================================================================================

// Using express to create the router
var router = express.Router();


// Create all routes
// Home route: executes the selectAll function to receive and display all burger data from the database 
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    })
})


// Export router 
module.exports = router;