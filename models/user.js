const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = mongoose.Schema({
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
        type: Schema.Types.ObjectId,
        ref: "Property"
    }]
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);
