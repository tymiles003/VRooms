const express = require("express");
const propertyController = require("../controllers/propertyController");
const roomController = require("../controllers/roomController");
const router = new express.Router();

/**
 * PROPERTY API
 */
// Get all properties (or optionally a specific property with an id)
router.get("/property/:property_id?", propertyController.index);
// Add a new property to a specific user using data passed in req.body
router.post("/property/:user_id", propertyController.create);
// Update an existing property with a specified id param, using data in req.body
router.patch("/property/:property_id", propertyController.update);
// Delete a specific property using the id in req.params.id
router.delete("/property/:property_id", propertyController.destroy);

/**
 * ROOM API
 */
// Get all rooms (or optionally a specific room with an id)
router.get("/room/:room_id?", roomController.index);
// Add a new room to a specific property using data passed in req.body
router.post("/room/:property_id", roomController.create);
// Update an existing room with a specified id param, using data in req.body
router.patch("/room/:room_id", roomController.update);
// Delete a specific room using the id in req.params.id
router.delete("/room/:room_id", roomController.destroy);


module.exports = router;
