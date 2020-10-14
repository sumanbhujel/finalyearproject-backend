const express = require('express');
const SignUpController = require('../controllers/SignupController');
const SignInController = require('../controllers/SinginController');

const APIROUTER = express.Router();

//auth
APIROUTER.post('/sign-up', SignUpController.registerUser);
APIROUTER.post('/sign-in', SignInController.signIn);

module.exports = APIROUTER;