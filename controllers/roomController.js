const Property = require("../models/property");
const Room = require("../models/room");

module.exports = {
    /**
     * Lists all rooms or a specific room
     */
    index: function(req, res) {
        let query;
        if (req.query) {
            query = req.query;
        } else {
            query = req.params.id ? { _id: req.params.id } : {};
        }
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
        // Create new room
        let newRoom = new Room(req.body.room);
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
                        res.send(err);
                    } else {
                        // Or send the newdoc to the browser
                        res.status(200).send(newdoc);
                    }
                }
            );
        });
    },

    /**
     * Updates an existing room
     */
    update: function(req, res) {
        Room.update(
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
     * Deletes an existing room
     */
    destroy: function(req, res) {
        Room.remove({
            _id: req.params.id
        })
            .then(function(doc) {
                res.json(doc);
            })
            .catch(function(err) {
                res.json(err);
            });
    }
};
