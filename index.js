
const express = require("express");
const cors = require("cors");// install this
require("dotenv").config();
const globalHelpers = require("./utils/globalHelpers");
const morgan = require('morgan')
const app = express();
const keys = require("./config/keys");
app.use(morgan('dev'))
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

// Global error handler
// app.use((err, _, res, next) => {
// console.log("err", err)
// const error = globalHelpers.handleMongooseError(err.message);
// res.status(400).json({ message: error.message })

// res.status(err.status || 400).json({ ...error, success: false });
// });

// app.use((req, res, next) => {
//     res.status(404).send({ message: 'Not found' })
// })

// app.use((error, req, res, next) => {
//     console.log(error)
//     res.status(500).json({ message: error.message })
//     next()
//     // res.status(error.status || 500).json({ ...error, success: false })
// })

// app.use((err, req, res, next) => {
//     console.error("err", err)
//     res.status(500).send('Something broke!')
// })


// {
//     "id": "lksadnfadfqwe34afanfj",
//     "name": "Mobile",
//     "price": 25000,
//     "isSold": false
// }

// Load environment variables

const Data = require('./data.json')
// console.log(data)

const AuthRoutes = require('./routes/Authentication-routes')
const WalletRoute = require('./routes/wallet-routes')
const PaymentRoute = require('./routes/Payment-routes')
const ProductRoute = require('./routes/Product-route')
// routes
app.use('/api/auth', AuthRoutes)
app.use('/api/wallet', WalletRoute)
app.use('/api/payment', PaymentRoute)
app.use('/api/product', ProductRoute)
// app.use('/api/auth', AuthRoutes)


console.log(Data)

const server = app.listen(keys.PORT, () =>
    console.log("server is running on port", keys.PORT)
);