const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

// const routes = require("./app/routing/htmlRoutes");
// routes(app);


//routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//listening on port
app.listen(PORT, function() {
  console.log("Friends listening on PORT: " + PORT);
});
