
"use strict";
const express = require("express");
const router = express.Router();
const { addProduct } = require('../../controller/product-controller');


router.post('/', addProduct);

module.exports = router