const Property = require("../models/property");
const User = require("../models/user");

module.exports = {
    /**
     * Lists all properties or a specific property
     */
    index: function(req, res) {
        let query;
        if (req.query) {
            query = req.query;
        } else {
            query = req.params.id ? { _id: req.params.id } : {};
        }
        Property.find(query)
            .populate("rooms")
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    },

    /**
     * Creates a new property and adds it to the given user_id
     */
    create: function(req, res) {
        console.log(">>> propertyController.js - adding new property")
        console.log(JSON.stringify(req.body, null, 2));
        // Create new property
        let newProperty = new Property(req.body.property);
        newProperty.save((err, doc) => {
            // Add property to user
            User.findByIdAndUpdate(
                req.params.user_id,
                {
                    $push: {
                        properties: doc._id
                    }
                },
                { new: true },
                (err, newdoc) => {
                    // Send any errors to the browser
                    if (err) {
                        res.send(err);
                    } else {
                        console.log("Property added to user: ", JSON.stringify(newdoc, null, 2));
                        // Or send the newdoc to the browser
                        res.status(200).send(newdoc);
                    }
                }
            );
        });
    },

    /**
     * Updates an existing property
     */
    update: function(req, res) {
        Property.update(
            {
                _id: req.params.id
            },
            req.body
        )
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    },

    /**
     * Deletes an existing property
     */
    destroy: function(req, res) {
        console.log(">>> propertyController.js");
        console.log("Searching for property_id: ", req.params.property_id);
        Property.findById(req.params.property_id)
            .then(function(property){
                property.remove(); // Using document-remove in order to trigger middleware
                console.log("Success: Property removed");
                res.status(200).send();
                // return a non-undefined value to signal that we didn't forget to return
                return null;
            })
            .catch(function(err) {
                console.log("Error: ", err);
                res.status(500).send();
            });
    }
};
