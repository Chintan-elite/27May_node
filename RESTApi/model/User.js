const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

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
    },
    password: String

})

userScema.pre("save", async function (next) {

    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password)
    next()
})



module.exports = mongoose.model("User", userScema)