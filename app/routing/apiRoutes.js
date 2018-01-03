const friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  
  app.post("/api/friends", function(req, res){
    
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    
    let userData = req.body;
    let userScores = userData.scores;
    let totalDifference;
    console.log(req.body);
  
  });
}