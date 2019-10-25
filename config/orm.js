//===========================================================================================
// DEPENDENCIES 
//===========================================================================================
var connection = require("./connection.js");

// Object Relational Mapping Object-- creating functions for individual queries to the mySQL database
var orm = {

    // function for selecting all rows/ all data from the burgers table. Receives a callback function. Callback functions will be responses to client requests (routes javascript)
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    // function for adding new row to the burgers table. Receives two arguments: the data to insert into table and a callback function. Callback functions will be responses to client requests (routes javascript)
    insertOne: function(val, cb) {

    },
    updateOne: function() {

    }
};


// Export the orm object to be used in the routes javascript files 
module.exports = orm