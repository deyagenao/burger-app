//============================================================
// DEPENDENCIES 
//============================================================
var mysql = require("mysql");
var connection;

// Set up mySQL connection 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user:"root",
        password: "AnotherPassword",
        database: "burgers_db"
    });
};

// Start mySQL connection 
connection.connect(function(err){
    if (err) throw err;
    
    console.log("Connected as id", connection.threadId);
});


// Export connection for ORM to use 
module.exports = connection; 