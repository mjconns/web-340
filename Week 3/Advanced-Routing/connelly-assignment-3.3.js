/*
============================================
; Title:  Exercise 3.3
; Author: Professor Massoud
; Modifications by: Micah Connelly
; Date: 3/21/2020
; Description: Assignment 3.3 - Advanced Routing
;===========================================
*/

// Import header
const header = require('../../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 3.3'));

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.get('/:employeeId', function (req, res) {

    var employeeId = parseInt(req.params.employeeId, 10);

    res.render('index', {
        employeeId: employeeId
    });
});

http.createServer(app).listen(8080, function () {
    console.log('port 8080 started');
});