
"use strict";
const express = require("express");
const router = express.Router();
const { registrationFN } = require('../../controller/registration-controller')
const { loginFN } = require('../../controller/login-controller')

router.post('/registration', registrationFN)
router.post('/login', loginFN)

module.exports = router