/*
============================================
; Title:  Exercise 3.4
; Author: Professor Massoud
; Modifications by: Micah Connelly
; Date: 3/23/2020
; Description: Assignment 3.4 -- putting it all together
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 3.4'));

//variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {
        message: "home page"
    });
});
app.get("/about", function (request, response) {
    response.render("about", {
        message: "about me here"
    });
});
app.get("/contact", function (request, response) {
    response.render("contact", {
        message: "contact me on this page"
    })
});
app.get("/products", function (request, response) {
    response.render("products", {
        message: "you found the products page"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});