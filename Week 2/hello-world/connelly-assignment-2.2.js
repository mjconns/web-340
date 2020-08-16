/*
============================================
; Title:  Assignment 2.2
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 8/16/2020
; Description: Assignment 2.2 - Hello World with Express
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 2.2'));

//program start

//variables
var express = require("express");
var http = require("http");
var app = express();

//funnction
app.use(function (request, response) {

    console.log("In comes a request to: " + request.url);
    response.end("Hello World");
});

http.createServer(app).listen(8080, function()
{
    //log app start
    console.log('Application started on port %s', 8080)
});
//program end