
"use strict";
const express = require("express");
const router = express.Router();
const { checkIsProductAvaliable, QRCodePayment } = require('../../controller/payment-controller');


router.get('/isvalid', checkIsProductAvaliable);
router.post('/purchase', QRCodePayment);

module.exports = router