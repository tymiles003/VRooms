const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: {
        type: String
    },
    
    pano_url: {
        type: String,
        required: true
    },

    annotations: [
        {
            text: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: ""
            },
            image: {
                type: String,
                default: ""
            },
            link: {
                type: String,
                default: ""
            },
            width: {
                type: Number,
                default: 8
            },
            xAxis: {
                type: Number,
                default: 0
            },
            yAxis: {
                type: Number,
                default: 1.5
            },
            zAxis: {
                type: Number,
                default: 5
            }
        }
    ]
});

module.exports = mongoose.model("Room", roomSchema);
