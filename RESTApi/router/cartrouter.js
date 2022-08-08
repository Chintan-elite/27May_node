const express = require("express");
const router = express.Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth");
const Cart = require("../model/cart")

router.post("/cart/:pid", auth, async (req, resp) => {

    const pid = req.params.pid;
    const uid = req.user._id;

    const cart = new Cart({
        uid: uid,
        pid: pid
    })

    try {
        const result = await cart.save();
        resp.send(result)
    } catch (error) {
        reso.send(error)
    }


})


router.get("/getCartProduct", auth, async (req, resp) => {

    const uid = req.user._id;

    try {
        result = await Cart.find({ uid: uid });

        const data = await Cart.aggregate([{ $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'ProductDetails' } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'UserDetails' } }])


        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})







module.exports = router