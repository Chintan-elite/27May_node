const bcrypt = require("bcryptjs");


const encPass = async (pass) => {

    const mypass = await bcrypt.hash(pass, 10);
    console.log(mypass)
    const verify = await bcrypt.compare("tops tech", mypass);
    console.log(verify)

}

encPass("tops tech")