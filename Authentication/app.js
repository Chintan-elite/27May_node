const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

// const encPass = async (pass) => {

//     const mypass = await bcrypt.hash(pass, 10);
//     console.log(mypass)
//     const verify = await bcrypt.compare("tops tech", mypass);
//     console.log(verify)

// }

// encPass("tops tech")

const generateToken = (id) => {

    const token = jwt.sign({ id }, "thisismyfirstjsonwebtoken")

    const dt = jwt.verify(token, "thisismyfirstjsonwebtoken");

    console.log(dt)
}

generateToken("62e11481cfe221c16f0c0c26");