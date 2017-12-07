const path = require('path');

//const friends = require("../data/friends");


module.exports = function(app) {
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
} 




// app.post("/api/new", function(req, res) {
//   var newfriend = req.body;
// 
//   console.log(newfriend);
//  
//   friends.push(newfriend);
//   res.json(newfriend);
// });