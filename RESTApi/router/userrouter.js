const express = require("express");
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs");

router.get("/users", async (req, resp) => {
    try {
        const result = await User.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/users/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await User.findById(_id);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

router.post("/users", async (req, resp) => {

    try {
        const user = new User(req.body);

        const result = await user.save();
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})

router.put("/users/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await User.findByIdAndUpdate(_id, req.body);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

router.delete("/users/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await User.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/login", async (req, resp) => {

    try {

        const email = req.body.email;
        const pass = req.body.password;

        const user = await User.findOne({ email: email });

        const isMatch = await bcrypt.compare(pass, user.password)

        if (isMatch) {
            resp.send(user)
        }
        else {
            resp.send("Invalid username or pass")
        }

    } catch (error) {
        resp.send("Invalid email or password")
    }

})



module.exports = router