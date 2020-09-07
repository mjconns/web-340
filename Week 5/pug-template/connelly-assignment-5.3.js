/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/7/2020
; Description: Assignment 5.3
===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 5.3'));

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/info", function (request, response) {
    response.render("index", {
        message: "Welcome to Pug Pups, USA"
    });
});

// server start success
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});
