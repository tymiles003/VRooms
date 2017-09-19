const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    thumbnail_url: {
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
    bedrooms: Number,
    baths: Number,
    built_year: Number,
    price: Number,
    square_feet: Number
});

module.exports = mongoose.model("Property", propertySchema);
