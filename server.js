const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// const routes = require("./app/routing/htmlRoutes");
// routes(app);

require("./app/routing/htmlRoutes")(app);


// var routes = require(path.join(__dirname, '/app/routing/apiRoutes'));
// routes(app);


// require(path.join(__dirname, '/app/routing/apiRoutes'))(app);
// require(path.join(__dirname, '/app/routing/htmlRoutes'))(app);
// 
app.listen(PORT, function() {
  console.log("Friends listening on PORT: " + PORT);
});
