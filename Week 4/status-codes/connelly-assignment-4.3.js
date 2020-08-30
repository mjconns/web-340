/*
============================================
; Title: Assignment 4.2
; Author: Professor Massoud
; Modified: Micah Connelly
; Date: 8/30/2020
; Description: Assignment 4.3 – HTTP Status Codes
===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 4.3'));

// variables
var express = require("express");
var http = require("http");
var app = express();

//404 error
app.get("/not-found", function (request, response) {
    response.status(404);
    response.json({
        error: "Oops! Looks like you took a wrong turn"
    })
});

//200 success
app.get("/ok", function (request, response) {
    response.status(200);
    response.json({
        message: "Glad you made it here successfully!"
    })
});

//501 my bad
app.get("/not-implemented", function (request, response) {
    response.status(501);
    response.json({
        error: "So it looks like I have some work to do"
    })
});

//confirm port 
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});