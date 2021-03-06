const express = require('express');
const SignUpController = require('../controllers/SignupController');
const SignInController = require('../controllers/SinginController');
const UserController = require('../controllers/UserController');

const APIROUTER = express.Router();

//auth
APIROUTER.post('/sign-up', SignUpController.registerUser);
APIROUTER.post('/sign-in', SignInController.signIn);
APIROUTER.get('/users/current/:id', UserController.getCurrentUser);

module.exports = APIROUTER;