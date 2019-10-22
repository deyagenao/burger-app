//============================================================
// DEPENDENCIES 
//============================================================
var mysql = require("mysql");


// Set up mySQL connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "AnotherPassword",
    database: "burgers_db"
});


// Start mySQL connection 
connection.connect(function(err){
    if (err) {
        console.error("Error connecting:", err.stack);
        return;
    }
    console.log("Connected as id", connection.threadId);
});


// Export connection for ORM to use 
module.exports = connection; 