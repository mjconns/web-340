/*
============================================
; Title:  Assignment 7.2
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/21/2020
; Description: Assignment 7.2 – TDD in Action
;===========================================
*/

// <<instructions>>  //
// Run the test      //
// npm test          //
// Passed function   //

var assert = require('assert');
describe("String#split", function () {
    it("should return an array of fruits", function () {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

function getFruits(str) {
    return str.split(',');
}
module.exports = getFruits;