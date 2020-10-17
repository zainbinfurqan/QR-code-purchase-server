
"use strict";
const express = require("express");
const router = express.Router();
const { addPurchase } = require('../../controller/purchase-controller')


router.post('/', addPurchase)