"use strict";

var http = require("https");
var Mongoose = require("mongoose");
var definition = require("../helpers/device.definition");
var schema = new Mongoose.Schema(definition);
var model = Mongoose.model('Device' , schema);

function addDevice (req , res){
    var _params = req.swagger.params['data'].value;
    model.create(_params , function(err , doc){
        if(err)
            res.status(400).send({message : "Error Occured while adding device" , code : "ERROR_OCCURED"});
        else
            res.status(200).send(doc);
    });
}

module.exports = {
    addDevice : addDevice
}