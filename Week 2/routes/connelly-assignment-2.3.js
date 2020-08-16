/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 8/16/2020
; Description: Assignment 2.3 - Routes
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 2.3'));

//program start

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function (request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("/contact", function (request, response) {
    response.end("Welcome to the contact page!");
});

app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(8080, function () {
    //log app start
    console.log('Application started on port %s', 8080)
});


//program end