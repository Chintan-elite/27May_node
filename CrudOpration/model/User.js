const mongoose = require("mongoose");

const userScema = new mongoose.Schema({
    Name: String,
    Email: String,
    Address: String,
    Phone: String
})

const User = new mongoose.model("User", userScema);

module.exports = User;