// let path = require('path');
let friends = require('../data/friends')
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends)
    });
    
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newFriend);
      
        characters.push(newFriend);
      
        res.json(newFriend);
      });
};