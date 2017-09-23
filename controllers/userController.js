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
                user.remove(); // Using document-remove in order to trigger middleware
                console.log("Success: User removed");
                res.status(200).send();
                // return a non-undefined value to signal that we didn't forget to return
                return null
            })
            .catch(function(err) {
                console.log("Error: ", err);
                res.status(500).send();
            });
    }
};
