const express = require("express");
const router = express.Router();
const User = require("../model/User");


router.get("/", (req, resp) => {
    resp.redirect("display")
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


router.get("/display", async (req, resp) => {

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

module.exports = router;