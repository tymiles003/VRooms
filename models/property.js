const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    thumbnail_url: {
        type: String
    },
    property_name: {
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    country: {
        type: String
    },
    bedrooms: Number,
    baths: Number,
    built_year: Number,
    price: Number,
    square_feet: Number,

    // Saves rooms' ObjectIds, ref refers to the Room model
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }]
});

module.exports = mongoose.model("Property", propertySchema);
