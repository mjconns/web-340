/*
============================================
; Title: Assignment 4.2
; Author: Professor Massoud
; Modified: Micah Connelly
; Date: 8/30/2020
; Description: Assignment 4.2 -- JSON APIs
===========================================
*/
// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 4.2'));

var express = require("express");
var http = require("http");
var app = express();

app.get("/fruits/:id", function (request, response) {

    var id = parseInt(request.params.id, 2);
    response.json({

        fruit1: "Apples",
        fruit2: "Bananas",
        fruits: 2
    
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});