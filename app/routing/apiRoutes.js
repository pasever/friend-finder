const friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.json(friends);
  });

  // app.post("/api/new", function(req, res) {
  //   var newfriend = req.body;
  // 
  //   console.log(newfriend);
  //  
  //   friends.push(newfriend);
  //   res.json(newfriend);
  // });
}