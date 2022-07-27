const mongoose = require("mongoose")


const categoryScema = new mongoose.Schema({
    catname: String
})

module.exports = mongoose.model("Category", categoryScema);