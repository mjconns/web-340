/*
============================================
; Title:  Assignment 1.5
; Author: Professor Massoud
; Modified: Micah Connelly
; Date:   8/9/2020
; Description: Assignment 1.5 - Hello World
;===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 1.5'));


// variable
var http = require('http');
var s = http.createServer(processRequest);
s.listen(8080);

// function
function processRequest(req, res) {

    //variables
    var body = 'Eventually I figured this out';
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}