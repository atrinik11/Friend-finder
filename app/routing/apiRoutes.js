var path = require("path");
var friendlist = require("../data/friend.js");
// Displays all friends
//=======================================================
module.exports = function(app) {
  app.get("/api/friends", function(request, response) {
    return response.json(friendlist);
  });

    //Creating new users
  //========================================================
  app.post("/api/friends", function(request, response) {
    //request.body hosts is equal to the JSON post sent from the users
    //This works because of our body-parser middleware
    //---------------------------------------------------------
    var newUser = request.body.name;
    var newUserScore = request.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    console.log("Friends List: " + friendlist.name + friendlist.image);
    console.log(newUser);
    console.log("New user score: " + newUserScore);

    //Run through all current friends in the list using the for loop
    //================================================================
    for (var i = 0; i < friendlist.length; i++){
      var scoresDiff = 0;

      //Run through scores to compare the scores of friends in list
      //--------------------------------------------------------------
      for (var j = 0; j < newUserScore.length; j++){
        scoresDiff += (Math.abs(parseInt(friendlist[i].scores[j]) - parseInt(newUserScore[j])));
      }
      console.log("Score Difference: " + scoresDiff);

      //Push results into scoresArray;
      //---------------------------------
      scoresArray.push(scoresDiff);
    }
    console.log(scoresArray);

    //Compare all friends for the best match
    //======================================================
    for (var i = 0; i < scoresArray.length; i++) {
      if(scoresArray[i] < scoresArray[bestMatch]){
        bestMatch = i;
      }
    }
    console.log("Best Match: " + bestMatch);

    //BestMatch data
    //=======================
    var bestFriend = JSON.stringify(friendlist[bestMatch]);
    console.log("bestfriend: " + bestFriend);
    response.json(bestFriend);

    //Push new submission into the friendlist array
    //================================================
    console.log("New User: " + JSON.stringify(request.body));
    friendlist.push(request.body);

  });
};
