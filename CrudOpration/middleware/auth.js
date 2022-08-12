const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')
const User = require("../model/User")

const auth = async (req, resp, next) => {

    try {
        const token = req.cookies.jwt



        const data = await jwt.verify(token, "thisismylogintokenkey");

        const user = await User.findOne({ _id: data._id })

        const tokens = user.Tokens.filter((element) => {
            return element.token === token
        })

        //console.log(tokens[0])
        if (tokens[0] === undefined) {

            resp.render("login", { err: "Please login first" })
        }
        else {
            req.user = user
            req.token = token

            next();
        }


    } catch (error) {
        console.log(error)
        resp.render("login", { err: "Please login first" })
    }
}

module.exports = auth
