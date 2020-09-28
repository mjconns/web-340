/*
============================================
; Title: EMS preject
; Author: Professor Krasso
; Modified: Micah Connelly
; Date: 9/21/2020
; Description: Assignment EMS preject
===========================================
*/

// * Import header
const header = require('../header-connelly');
console.log(header.display('Micah', 'Connelly', 'EMS project'));

// * Require statements.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const Fruit = require('./models/employees');



// * database connection string to MongoDB Atlas
const conn = 'mongodb+srv://mjconns2009:Mn102007@cluster0.8ojcm.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Database connection
mongoose.connect(conn, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("App connected to mLab MongoDB instance");
});


// mongoose.connect(conn, {
//     promiseLibrary: require('Cluster0'),
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
// }).then(() => {
//     console.log('Connection to the database instance was successful');
// }).catch(err => {
//     console.log(`MongoDB Error: ${err.message}`);
// });

// * Sets up CSRF protection
let csrfProtection = csrf({
    cookie: true
});

// * Initializes the express application
let app = express();

// * Configures the dependency libraries
// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);

// * Intercepts all incoming requests and adds a CSRF token to the response
app.use(function (req, res, next) {
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

// * Sets up the view engine, view's directory path, and the server port
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
// Once I did that, I was able to link to my CSS within my header.js file like below:
// <link rel="stylesheet" href="/css/styles.css">


/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs
 * URL: localhost:8080
 */
app.get("/", function (request, response) {
    response.render("index", {
        message: "EMS system"
    });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get("/new", function (request, response) {
    response.render("new", {
        message: "Add new employees"
    });
});


/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
// app.post('/process', function (req, res) {
//     // console.log(request.body.txtName);
//     if (!req.body.txtName) {
//         res.status(400).send('Entries must have a name');
//         return;
//     }

//     // get the request's form data
//     const fruitName = req.body.txtName;
//     console.log(fruitName);

//     // create a fruit model
//     let fruit = new Fruit({
//         name: fruitName
//     });

//     // save
//     fruit.save(function (err) {
//         if (err) {
//             console.log(err);
//             throw err;
//         } else {
//             console.log(fruitName + ' saved successfully!');
//             res.redirect('/');
//         }
//     });
// });

/**
 * Creates a new Node.js server and listens on local port 8080.
 */
http.createServer(app).listen(app.get('port'), function () {
    console.log('Application started on port ' + app.get('port'));
});