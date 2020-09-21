/*
============================================
; Title: EMS preject
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/21/2020
; Description: Assignment EMS preject
===========================================
*/

// Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'EMS project'));

//variables
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const app = express();
const Employee = require('./models/employees');

// database connection string to MongoDB Atlas
const conn = "mongodb+srv://cluster0.8ojcm.gcp.mongodb.net/EMS --username mjconns2009";

/**
 * Database connection
 */
mongoose.connect(conn, {
    promiseLibrary: require('bluebird'),
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Connection to the database instance was successful');
}).catch(err => {
    console.log(`MongoDB Error: ${err.message}`);
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
// app.use('./css', express.static('css'));

app.use(express.static(__dirname + '/public'));

app.get("/", function (request, response) {

    response.render("index", {
        message: "EMS system"
    });
});
app.get("/new", function (request, response) {
    response.render("new", {
        message: "Add new employees"
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Go to localhost:8080 in browser");
});