const express = require("express");
const propertyController = require("../controllers/propertyController");
const router = new express.Router();

// Get all properties (or optionally a specific property with an id)
router.get("/property/:property_id?", propertyController.index);
// Create a new property using data passed in req.body
router.post("/property/:user_id", propertyController.create);
// Update an existing property with a specified id param, using data in req.body
router.patch("/property/:property_id", propertyController.update);
// Delete a specific property using the id in req.params.id
router.delete("/property/:property_id", propertyController.destroy);

module.exports = router;
