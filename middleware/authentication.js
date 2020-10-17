// "User Stric";
// const cacheSchema = require("@models/cache"),
//   mongoose = require("mongoose"),
//   jwt = require("jsonwebtoken"),
//   userSchema = require("@models/user/User"),
//   keys = require("../config/keys");

// exports.authrizationFN = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"];
//     const decoded = jwt.verify(token, keys.JWT_SECRET);
//     const isUser = await userSchema.findOne({
//       _id: mongoose.Types.ObjectId(decoded._id),
//     });

//     if (!isUser) {
//       throw new Error("Invalid User");
//     }

//     const getCache = await cacheSchema.findOne({ key: token });

//     if (!getCache) {
//       throw new Error("Token is expired");
//     }

//     const a = new Date();
//     const b = getCache.data.expiresIn;

//     if (b < a) {
//       throw new Error("Token is expired");
//     }

//     if (getCache.data.id != decoded._id) {
//       throw new Error("Invalid User");
//     }

//     req.user = decoded._id;
//     req.userData = isUser;
//     next();
//   } catch (error) {
//     next({ message: error });
//   }
// };
