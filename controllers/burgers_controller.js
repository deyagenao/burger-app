//===========================================================================================
// DEPENDENCIES 
//===========================================================================================

var express = require('express');

// Import the model (burger.js) to use its database functions 
var burger = require('../models/burger');


//===========================================================================================
// ROUTER
//===========================================================================================

// Using express to create the router
var router = express.Router();


// Create all routes
// GET home route: executes the all function to receive and display all burger data from the database 
router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render('index', hbsObject)
    })
})

// POST route: create a new burger and post to the burgers database 
router.post('/api/burgers', function(req, res){
    console.log(req.body);
    burger.create('burger_name', req.body.name, function(result){
        res.json({id: result.insertId});
    });
});

// PUT route: update a burger and change its devoured value to true
router.put('/api/burgers/:id', function(req, res){
    console.log(req.body);
    burger.update('devoured', req.body.devoured, 'id', req.params.id, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export router 
module.exports = router;