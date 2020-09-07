/*
============================================
; Title:  Exercise 3.2
; Author: Professor Massoud
; Modifications by: Micah Connelly
; Date: 8/23/2020
; Description: Assignment 3.2 - Logging
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 3.2'));

//variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.use(logger("short"));
app.get("/", function (request, response) {

    response.render("index", {
        message: "Welcome to the Morgan Logger Example!"
    });
});

//start port
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
