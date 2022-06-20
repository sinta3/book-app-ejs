const express = require("express");
const app = express();
const passport = require("passport");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const session = require("express-session");
const expressLayout = require("express-ejs-layouts");
const bodyParser = require('body-parser');
const router = require('./routes/index')

const { PORT, db, SESSION_SECRET } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

console.log(__dirname + '/views')
app.use(expressLayout);
app.use(express.static(__dirname + '/views'));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// app.get("/", require('./routes/index'));
app.use('/books', router)

if (db) {
  app.listen(PORT, () => {
    console.log(`this app listen on PORT: ${PORT}`);
  });
}