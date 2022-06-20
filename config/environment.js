require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  SESSION_SECRET: process.env.SESSION_SECRET,
};