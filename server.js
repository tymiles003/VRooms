// Require our dependencies
const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require('fs');
require('dotenv').config();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const session = require("express-session");

const apiRoutes = require("./routes/apiRoutes");
const loginRoutes = require("./routes/loginRoutes");

const cheerio = require("cheerio");
const request = require('request');
const axios = require('axios');
let parseString = require('xml2js').parseString; 

// Import Zillow dependency and initiate
const zillow_key = process.env.ZILLOW_KEY;
// let Zillow = require('node-zillow');
// let zillow = new Zillow(zillow_key);

// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 5000;
mongoose.Promise = bluebird;
const app = express();

// Set Body Parser
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cookieParser());
app.use(session({
    secret: "shhsecret",
    resave: true,
    saveUninitialized: false,
	cookie: { httpOnly: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./controllers/config/passport")(passport);

// Route to serve gzipped bundle.js file.
// IMPORTANT: This NEEDS to be higher-priority than the static route
if(process.env.NODE_ENV === 'production') {
	app.get("*/bundle.js", function (req, res, next) {
		req.url = req.url + ".gz";
		res.set("Content-Encoding", "gzip");
		res.set("Content-Type", "text/javascript");
		next();
	});
}

app.use(express.static(__dirname + "/public"));
// app.use("/", routes);

app.use("/", loginRoutes);

// API-related routes (maybe relocated in future)
app.post('/scrape', (req,res) => {
	console.log('>>> server.js SCRAPE ZILLOW REQUEST');
	// console.log('req.body',req.body);
	const qURL = req.body;
	console.log('qURL',qURL);
	// console.log('req',req);
	// request(qURL, (error, response, html) => {

	// request(qURL, function(error, response, html){
	// 	let $ = cheerio.load(html);
	// 	let scrapeData = {};

	// 	let $header = $('header');
	// 	$header.each((i,el) => {
	// 		let $el = $(el);

	// 		let $h1 = $el.find('h1');
	// 		let h1Text = $h1.text().trim();
	// 		scrapeData.headline = h1Text;
	// 	})
	// 	console.log('scrapeData',scrapeData);
	// 	res.json(scrapeData);
	// })	
	axios.get(qURL).then((response) => {
		let $ = cheerio.load(response.data);
		let h1 = $('h1').text();
		console.log('h1',h1);
		// return h1;
		res.send('h1 '+h1);
	})
	// res.send('scrape return');
})
app.post('/fetch-listing', (req,res) => {
	console.log('>>> POST /fetch-listing (server.js)');
	// const zpid = 48749425;
	let zpid = req.body;
	console.log('zpid',zpid);
	let qURL =`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${zillow_key}&zpid=${zpid}`;
	console.log('qURL',qURL);

	axios.get(qURL)
	.then( (results) => {
		let raw = results.data;
		console.log('raw',raw);
		// console.log('typeof raw',typeof raw);
		parseString(raw, (err,result) => {
			// console.log('result',result);
			let resultObj = result['UpdatedPropertyDetails:updatedPropertyDetails'];
			let message = resultObj.message[0].text[0].trim();
			console.log('resultObj',resultObj);
			console.log('message',message);

			if (message == 'Request successfully processed'){
				let isolatedResponse = resultObj.response[0];
				console.log('isolateResponse',isolatedResponse);
				res.json(isolatedResponse)
			}
			else {
				res.send(message)
			}
		})
		// console.log('data',data);
		// res.json(data);
	})
})

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