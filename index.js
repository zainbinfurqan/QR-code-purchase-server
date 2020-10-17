
const express = require("express");
const cors = require("cors");// install this
require("dotenv").config();

const app = express();
const keys = require("./config/keys");

app.disable("x-powered-by");

// view engine setup
// global.base = path.join(__dirname + "/");

// General Middlewares
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set few important headers
app.use(require("./middleware/setHeaders"));
app.use(cors())

// Load environment variables

const data = require('./data.json')
console.log(data)

const AuthRoutes = require('./routes/Authentication-routes')
// routes
app.use('/api/auth', AuthRoutes)


const server = app.listen(keys.PORT, () =>
    console.log("server is running on port", keys.PORT)
);