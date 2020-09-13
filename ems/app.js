/*
============================================
; Title: Assignment 
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 
; Description: Assignment 
===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 5.2'));

// required
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();


//functions
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (request, response) {

    response.render("index", {
        title: "Home page"
    });

});

// server start success
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});