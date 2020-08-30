/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 8/30/2020
; Description: Assignment 4.4 cURL
===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 4.4'));

// varaibles
var express = require("express");
var http = require("http");
var app = express();

// get request
app.get("/", function (request, response) {
    response.send("API invoked as an HTTP GET request.");
});

// put request
app.put("/", function (request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

// post request
app.post("/", function (request, response) {
    response.send("API invoked as an HTTP POST request");
});

// delete request
app.delete("/", function (request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

// server start success
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});