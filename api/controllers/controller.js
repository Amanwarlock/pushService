"use strict";
var http = require("https");
var Mongoose = require("mongoose");
var addDeviceController = require("./add.device.ctrl");
var config = require("../helpers/config.json");
var url = process.env.mongo_sandbox ? process.env.mongo_sandbox : config.mongoUrl;

Mongoose.Promise = global.Promise;
Mongoose.connect(url, function(err) {
    if (!err) {
        console.log("Hey ! ,Connected to the DB" , url);
    } else {
        console.log("error " + err.message);
    }
});

function hearBeat(req , res){
    var response = {
        message : "Greetings ! App Health is fine.",
        mongo_url : url,
        flag : process.env.PROD,
        extras:{
            heroku_config : {
                prod_flag : process.env.PROD,
                prod_db_url : process.env.mongo_sandbox
            }
        }
    };
    res.status(200).send(response);
}

module.exports = {
    v1_addDevice : addDeviceController.addDevice,
    v1_heartBeat : hearBeat
}