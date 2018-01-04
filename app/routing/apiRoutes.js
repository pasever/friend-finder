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
    let userScores = userData.answers;
    let totalDifference;
    console.log(req.body);
    
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
    
      for (var j = 0; j < currentFriend.answers.length; j++) {
        var currentFriendScore = currentFriend.answers[j];
        var currentUserScore = userScores[j];
    
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
    
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }  
    friends.push(userData);
    res.json(bestMatch);
  });
}