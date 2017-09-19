const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    pano_url: {
        type: String,
        required: true
    },

    annotations: [{
        text: String,
        label: String,
        image: String,
        link: String,
        width: Number,
        xAxis: {
            type: Number,
            default: 0
        },
        yAxis: {
            type: Number,
            default: 0
        },
        zAxis: {
            type: Number,
            default: 5
        }
    }]
});

module.exports = mongoose.model("Room", roomSchema);
