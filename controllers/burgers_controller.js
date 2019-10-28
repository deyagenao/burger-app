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
// GET home route: executes the all function to receive and display all burger data from the database 
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    })
})

// POST route: create a new burger and post to the burgers database 
router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.create("burger_name", req.body.name, function(result){
        res.json({id: result.insertId});
    });
});


// Export router 
module.exports = router;