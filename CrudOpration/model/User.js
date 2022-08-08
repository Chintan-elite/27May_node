const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userScema = new mongoose.Schema({
    Name: String,
    Email: String,
    Address: String,
    Phone: String,
    Password: String,
    Tokens: [
        {
            token: String
        }
    ]
})

userScema.method.generateToken = async function (next) {

    const token = await jwt.sign({ _id: this._id }, "thisismylogintokenkey")
    this.Tokens = this.Tokens.concate({ token: token })
    this.save();
    next();
}

userScema.pre("save", async function (next) {

    this.Password = await bcrypt.hash(this.Password, 10);
    console.log(this.Password)
    next()
})


const User = new mongoose.model("User", userScema);



module.exports = User;