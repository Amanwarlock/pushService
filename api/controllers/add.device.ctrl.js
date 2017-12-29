"use strict";

var http = require("https");
var Mongoose = require("mongoose");
var definition = require("../helpers/device.definition");

function addDevice (req , res){
    var _params = req.swagger.params['data'].value;
    console.log("-----inside add Device----" , _params);
}

module.exports = {
    addDevice : addDevice
}