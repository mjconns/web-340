/*
============================================
; Title:  Assignment 1.3
; Author: Professor Massoud
; Modified: Micah Connelly
; Date:   8/9/2020
; Description: Assignment 1.3 - modules
;===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'Assignment 1.3'));


// setting variable and requiring url
var url = require('url');

// url for example
var parsedURL = url.parse('https://www.example.com/profile?name=micah');

// finding protocol
console.log(parsedURL.protocol);

// finding host
console.log(parsedURL.host);

// finding query
console.log(parsedURL.query);
