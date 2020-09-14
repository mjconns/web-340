/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/14/2020
; Description: Assignment 6.4 - EMS (Milestone 2): User Interface Submission
;===========================================
*/

//requires
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//define the employees schema
var emsSchema = new Schema({
    firstName: String,
    lastName: String,
    title: String,
    salary: String,
    years: String,
});

//define the employee model
var Employee = mongoose.model("Employee", emsSchema);

//expose employee to calling files
module.exports = Employee;