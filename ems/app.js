/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/14/2020
; Description: Assignment 6.4 - EMS (Milestone 2): User Interface Submission
===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 6.4'));

//variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
// app.use('./css', express.static('css'));

app.use(express.static(__dirname + '/public'));

app.get("/", function (request, response) {

    response.render("index", {
        message: "EMS system"
    });
});
app.get("/new", function (request, response) {
    response.render("new", {
        message: "Add new employees"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});