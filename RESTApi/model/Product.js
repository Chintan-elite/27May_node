const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    pname: String,
    cid: String,
    path: String,
    img: String
})

module.exports = mongoose.model("Product", productSchema)