/*
============================================
; Title:  Assignment 7.3
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/21/2020
; Description: Assignment 7.3 – Mocha and Chai
;===========================================
*/

// Unit Test
var fruits = require("../connelly-fruit");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function () {
    it("should return an array of fruits", function () {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});