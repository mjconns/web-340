/*
============================================
; Title:  Assignment 6.3
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/13/2020
; Description: Assignment 6.3 -- Demonstrates how to setup a MongoDB connection.
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 6.3'));


// required
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://cluster0.8ojcm.gcp.mongodb.net/EMS --username mjconns2009";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("dev"));

// create server
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});