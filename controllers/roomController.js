const Property = require("../models/property");
const Room = require("../models/room");

module.exports = {
    /**
     * Lists all rooms or a specific room
     */
    index: function(req, res) {
        let query = req.params.room_id ? { _id: req.params.room_id } : {};
        Room.find(query)
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    },

    /**
     * Creates a new room and adds it to the given property_id
     */
    create: function(req, res) {
        console.log(">>> roomController.js - adding new room")
        console.log(JSON.stringify(req.body, null, 2));
        // Create new room
        let newRoom = new Room(req.body);
        newRoom.save((err, doc) => {
            // Add Room to user
            Property.findByIdAndUpdate(
                req.params.property_id,
                {
                    $push: {
                        rooms: doc._id
                    }
                },
                { new: true },
                (err, newdoc) => {
                    // Send any errors to the browser
                    if (err) {
                        console.log("Error: ", err);
                        res.send(err);
                    } else {
                        console.log("Room added to property: ", JSON.stringify(newdoc, null, 2));
                        // Or send the newdoc to the browser
                        res.json(newRoom);
                    }
                }
            );
        });
    },

    /**
     * Updates an existing room
     */
    update: function(req, res) {
        console.log(">>> roomController.js - Updating room");
        Room.findByIdAndUpdate(
            req.params.room_id,
            req.body,
            { new: true }
        )
            .then(function(doc) {
                console.log("Success, room updated: ", JSON.stringify(doc, null, 2));
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    },

    /**
     * Deletes an existing room
     */
    destroy: function(req, res) {
        Room.remove({
            _id: req.params.room_id
        })
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    }
};
