const User = require("../models/user");

module.exports = {
    /**
     * Displays JSON of a specific user
     */
    index: function(req, res) {
        console.log("Searching for: ", req.params.user_id);
        User.findById(req.params.user_id)
            .populate("properties")
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    },

    /**
     * Deletes an existing user and their associated properties
     */
    destroy: function(req, res) {
        console.log(">>> userController.js");
        console.log("Searching for user_id: ", req.params.user_id);
        User.findById(req.params.user_id)
            .then(function(user){
                user.remove().exec(); // Using document-remove in order to trigger middleware
                console.log("Success: User removed");
                res.status(200).send();
            })
            .catch(function(err) {
                console.log("Error: Could not find user");
                res.status(500).send();
            });
    }
};
