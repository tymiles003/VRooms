const User = require("../models/user");

module.exports = {
    /**
     * send emai to vrooms from user
     */
    sendEmail: function(req, res) {
        console.log("Users answers: ", req.params.answers);
        console.log("Users answers: ", req.body.answers);
        
        // User.findById(req.params.user_id)
        //     .populate("properties")
        //     .then(function(doc) {
        //         res.json(doc);
        //     })
        //     .catch(function(err) {
        //         res.json(err);
        //     });
    },

   
};