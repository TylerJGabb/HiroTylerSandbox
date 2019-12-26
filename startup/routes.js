/**
 * This file will be used to specify all routes and middleware
 * in this node application
 */
const morgan = require('morgan');
const express = require('express');
const root = require('../routes/root');

 module.exports = function(app){
     //Routes
     app.use(express.json());
     app.use('/', root);

     //Middleware
     app.use(express.urlencoded({extender : true}));
     app.use(morgan('dev'));

     //Error
     //error handling typically goes here... but I may use express-async-errors
     //it makes me uncomforatble though since I don't understand it fully...
 }