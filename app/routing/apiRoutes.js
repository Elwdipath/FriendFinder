// let path = require('path');
let friends = require('../data/friends')
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends)
    });
    
    app.post("/api/friends", function(req, res) {
      var diffTotal = 0;
      var match = {
          name: "",
          photo: "",
          difference: 1000
      };
      var userInput = req.body
      var userScores = userInput.scores
      var answers = userScores.map(function(item) {
          return parseInt(item, 10);
      });
      userInput = {
          name: req.body.name,
          photo: req.body.photo,
          scores: answers
      };

      var sum = answers.reduce((a, b) => a + b, 0);

      for (var i = 0; i < friends.length; i++) {
          diffTotal = 0;
          var bmatchScore = friends[i].scores.reduce((a, b) => a + b, 0);
          diffTotal += Math.abs(sum - bmatchScore);

          if(diffTotal <= match.difference) {
              match.name = friends[i].name;
              match.photo = friends[i].photo;
              match.difference = diffTotal;
          }
      }    
      friends.push(userInput);
      res.json(match);
  });
};