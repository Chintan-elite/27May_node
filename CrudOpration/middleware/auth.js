const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')

const auth = async (req, resp, next) => {

    try {
        const token = req.cookies.jwt
        console.log("token is : " + token)

        
        const user = await jwt.verify(token, "thisismylogintokenkey");

        // req.user = user;

        next();
    } catch (error) {
        console.log(error)
        resp.render("login", { err: "Please login first" })
    }
}

module.exports = auth
