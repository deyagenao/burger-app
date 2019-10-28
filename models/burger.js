//===========================================================================================
// DEPENDENCIES 
//===========================================================================================
var orm = require('../config/orm.js');

// ORM Functions 
var burger = {

    // function for gettting all burgers, receives a callback function
    all: function (cb) {
        orm.selectAll('burgers', function(res){
            cb(res)
        });
    },

    // function for adding/ creating a new burger 
    create: function (col, val, cb) {
        orm.insertOne('burgers', col, val, function(res){
            cb(res);
        });
    },

    // function for updating a burger 
    update: function(col, val, conditionCol, conditionVal, cb){
        orm.updateOne('burgers', col, val, conditionCol, conditionVal, function(res) {
            cb(res);
        });
    }

};


// Export functions 
module.exports = burger 