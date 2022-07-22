const mongoose = require("mongoose");


const userScema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    joindate: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("User", userScema)