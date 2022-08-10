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

userScema.methods.generateToken = async function (next) {

    const token = await jwt.sign({ _id: this._id }, "thisismylogintokenkey")
    this.Tokens = this.Tokens.concat({ token: token })
    await this.save();
    return token;
}

userScema.pre("save", async function (next) {

    if (this.isModified("Password")) {
        this.Password = await bcrypt.hash(this.Password, 10);

        next()
    }
})


const User = new mongoose.model("User", userScema);



module.exports = User;