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

// Middleware to delete all of the property's rooms when this property is removed
propertySchema.pre("remove", function(next) {
    console.log(">>> property.js - removing property's rooms");
    // Loop through each of the room_id's and remove the room
    for (let room_id of this.rooms){
        console.log("Removing room_id: ", room_id);
        Room.remove({ _id: room_id }).exec();
    }
    next();
});

module.exports = mongoose.model("Property", propertySchema);
