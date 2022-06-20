const { PORT, SESSION_SECRET } = require("./environment");
const db = require("./database");

module.exports = {
  PORT,
  db,
  SESSION_SECRET
};