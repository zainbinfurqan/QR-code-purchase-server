
"use strict";
const express = require("express");
const router = express.Router();
const { addTransiction } = require('../../controller/transictions-controller')


router.post('/', addTransiction)
