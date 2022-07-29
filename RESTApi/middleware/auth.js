const jwt = require("jsonwebtoken")


const auth = async (req, resp, next) => {

    try {
        const token = req.header('auth-token');
        console.log(token)
        const user = await jwt.verify(token, "thisisloginapitoken");
        next();
    } catch (error) {
        resp.send("Invalid token !!! Please login to use this api")
    }
}

module.exports = auth
