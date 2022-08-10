const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs")
const cookie = require("cookie-parser")
const auth = require("../middleware/auth")
router.get("/", (req, resp) => {
    resp.render("login")
})

router.post("/addUser", async (req, resp) => {


    const _id = req.body.id;

    if (_id === "") {
        try {
            const user = new User(req.body)

            const result = await user.save();
            const result1 = await User.find();
            // resp.redirect("display")
            resp.render("index", { success: ` ${user.Name} , data inserted !!!`, data: result1 });
        } catch (error) {
            console.log(error)
        }
    } else {
        try {


            const result = await User.findByIdAndUpdate(_id, req.body)
            const result1 = await User.find();
            // resp.redirect("display")
            resp.render("index", { success: ` ${result.Name} , data updated !!!`, data: result1 });
        } catch (error) {
            console.log(error)
        }
    }


})


router.get("/display", auth, async (req, resp) => {

    try {
        const result = await User.find();
        resp.render("index", { data: result })
    } catch (error) {
        console.log(error)
    }

})

router.get("/deleteUser", async (req, resp) => {


    try {

        const result = await User.findByIdAndDelete({ _id: req.query.did });
        const result1 = await User.find();
        resp.render("index", { data: result1 })
    } catch (error) {
        console.log(error)
    }


})

router.get("/editUser", async (req, resp) => {
    try {
        console.log(req.query.did)
        const result = await User.findById({ _id: req.query.did })
        const result1 = await User.find();
        resp.render("index", { data: result1, udata: result })
    } catch (error) {
        console.log(error)
    }
})


router.post("/login", async (req, resp) => {

    const email = req.body.Email;
    const password = req.body.Password;



    try {
        const result = await User.findOne({ Email: email });



        const isMatch = await bcrypt.compare(password, result.Password);





        if (isMatch) {


            const token = await result.generateToken();

            resp.cookie("jwt", token, {
                expires: new Date(Date.now() + 500000),
                httpOnly: true

            })

            resp.redirect("display")
        }
        else {
            resp.render("login", { err: "Invalid username or password" })
        }

    } catch (error) {
        resp.render("login", { err: "Invalid Credentials" })
    }


})

module.exports = router;