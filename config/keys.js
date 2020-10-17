const keys = {
  PORT: process.env.PORT,
  SALT: process.env.SALT,
};

if (process.env.NODE_ENV === "development") {
  keys["MONGO_URI"] = process.env.MONGO_URI;
}
if (process.env.NODE_ENV === "production") {
  keys["MONGO_URI"] = process.env.MONGO_URI_P;

}

module.exports = keys;
