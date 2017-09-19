const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    bedrooms: Number,
    baths: Number,
    built_year: Number,
    price: Number,
    square_feet: Number
});

module.exports = mongoose.model("Property", propertySchema);
