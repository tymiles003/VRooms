// Require our dependencies
const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const session = require("express-session");

const apiRoutes = require("./routes/apiRoutes");
const loginRoutes = require("./routes/loginRoutes");

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 5000;
mongoose.Promise = bluebird;
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: "shhsecret",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./controllers/config/passport")(passport);


app.use(express.static(__dirname + "/public"));
// app.use("/", routes);

app.use("/", loginRoutes);

// Default React route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


// Change the MongoDB URI depending on environment.
let db = "mongodb://localhost/vroomsDB";
// const db = process.env.MONGODB_URI || "mongodb://localhost/vroomsDB";
if (process.env.NODE_ENV === 'production') {
	db = process.env.MONGODB_URI
}

// Connect mongoose to our database
mongoose.connect(db, error => {
    // Log any errors connecting with mongoose
    if (error) {
        console.error(error);
    } else {
        // Or log a success message
        console.log("mongoose connection is successful");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log("Now listening on port %s!", PORT);
});