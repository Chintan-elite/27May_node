const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    pname: String,
    cid: String
})

module.exports = mongoose.model("Product", productSchema)