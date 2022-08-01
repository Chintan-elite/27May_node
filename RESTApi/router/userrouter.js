const express = require("express");
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth");

router.get("/users", auth, async (req, resp) => {
    try {
        const result = await User.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

router.get("/users/:id", auth, async (req, resp) => {
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

        if (!isMatch) return resp.send("invalid uname or pass")


        const token = await jwt.sign({ _id: user._id }, "thisisloginapitoken");
        resp.header('auth-token', token).send(`this your token for access all api : ${token}`)

    } catch (error) {
        resp.send("Invalid email or password")
    }

})

router.post("/logout", auth, async (req, resp) => {
    try {
        //resp.header('auth-token', 'abc').send(`logut succesfully!!!`)
        resp.removeHeader('auth-token')

    } catch (error) {
        console.log(error)
    }
})


module.exports = router