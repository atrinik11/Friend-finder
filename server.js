//Dependencies
//=================================================
var fs = require("fs");
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

//Set up the express app
//=================================================
var app = express();
var PORT = process.env.PORT || 3000;

//sets up the express app to handle data parsing
//===================================================
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type: "application/vnd.api + JSON"}));

//Required Routers
//=================================================
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//Connecting the server
app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT);
});
