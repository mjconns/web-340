/*
============================================
; Title:  Assignment 2.4
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 8/16/2020
; Description: Assignment 2.4 - EJS Views
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 2.4'));

//program start

//variables
var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

//methods
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

//calling function
app.get("/", function (request, response) {

    response.render("index", {
        firstName: "Micah",
        lastName: "Connelly",
        address: "Home is where the heart is"
    });
});

//server generation
http.createServer(app).listen(8080, function () {
    //logging port
    console.log("EJS-Views app started on port 8080.");
});

//program end