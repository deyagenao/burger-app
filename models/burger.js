//===========================================================================================
// DEPENDENCIES 
//===========================================================================================
var orm = require("../config/orm.js");

// ORM Functions 
var burger = {
    all: function (cb) {
        orm.selectAll(function(res){
            cb(res)
        });
    },
};


// Export functions 
module.exports = burger 