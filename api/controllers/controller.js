"use strict";
var http = require("https");
var Mongoose = require("mongoose");
var addDeviceController = require("./add.device.ctrl");
var config = require("../helpers/config.json");
var url = config.mongoUrl;
process.env.mongoUrl = config.mongoUrl;



Mongoose.Promise = global.Promise;
Mongoose.connect(url, function(err) {
    if (!err) {
        console.log("Hey ! ,Connected to the DB" , url);
    } else {
        console.log("error " + err.message);
    }
});

function hearBeat(req , res){
    res.status(200).send({message: "Greetings ! App Health is fine."});
}

module.exports = {
    v1_addDevice : addDeviceController.addDevice,
    v1_heartBeat : hearBeat
}