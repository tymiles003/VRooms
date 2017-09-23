const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Property = require("./property");

const userSchema = new mongoose.Schema({
    local: {
        name: String,
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String,
        username: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },

    // Saves properties' ObjectIds, ref refers to the Property model
    properties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    }]
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// Middleware to delete all of the user's properties when this user is removed
userSchema.pre("remove", function(next) {
    console.log(">>> user.js - removing user's properties");
    // Loop through each of the property_id's and remove the property
    for (let property_id of this.properties){
        console.log("Removing property_id: ", property_id);
        Property.remove({ _id: property_id }).exec();
    }
    next();
});

module.exports = mongoose.model("User", userSchema);
