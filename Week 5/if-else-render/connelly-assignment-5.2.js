/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/7/2020
; Description: Assignment 5.2 EJS Templates
===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 5.2'));

// requires
var express = require("express");
var http = require("http");
var path = require("path");

//functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// local comp arr

var composers = [
    "Bach",
    "Mozart",
    "Beethovem",
    "Verdi"
]

// routes
app.get('/info', function (req, res) {
    res.render('index', {
        names: composers
    })

});

// server start success
http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});