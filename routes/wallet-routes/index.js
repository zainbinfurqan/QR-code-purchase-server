
"use strict";
const express = require("express");
const router = express.Router();
const { addAmountToWallet, getWalletAmount } = require('../../controller/wallet-controller')


router.post('/', addAmountToWallet)
router.get('/', getWalletAmount)

module.exports = router