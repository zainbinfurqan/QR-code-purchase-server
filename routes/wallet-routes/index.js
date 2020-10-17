
"use strict";
const express = require("express");
const router = express.Router();
const { addAmountToWallet } = require('../../controller/wallet-controller')


router.post('/', addAmountToWallet)
