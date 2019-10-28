//===========================================================================================
// DEPENDENCIES 
//===========================================================================================
var connection = require('./connection.js');

// Object Relational Mapping Object-- creating functions for individual queries to the mySQL database
var orm = {

    // function for selecting all rows/ all data from the burgers table. Receives a table name and a callback function. Callback functions will be responses to client requests (routes javascript)
    selectAll: function(tableName, cb) {
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },


    // function for adding new row to the burgers table. Receives four arguments: table name, column name, the data to insert into table and a callback function. Callback functions will be responses to client requests (routes javascript)
    insertOne: function(tableName, col, val, cb) {
        var queryString = 'INSERT INTO ' + tableName + ' (' + col + ') VALUES ("' + val  + '")';
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },


    // function for updating a row in the burgers table. Receives five arguments: table name, column name of the value to be updated, updated value, column name of the condition and value of the condition  
    updateOne: function(tableName, col, val, conditionCol, conditionVal, cb) {
        var queryString = 'UPDATE ' + tableName + ' SET ' + col + ' = ' + val + ' WHERE ' + conditionCol + ' = ' + conditionVal + ';'; 
        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        })

    }
};


// Export the orm object to be used in the routes javascript files 
module.exports = orm