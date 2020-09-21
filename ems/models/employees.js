/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/21/2020
; Description: EMS project
;===========================================
*/

//requires
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define the employees schema
let employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', employeeSchema);
