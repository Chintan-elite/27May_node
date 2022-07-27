const express = require("express")
const router = express.Router();
const Category = require("../model/Category")
const Product = require("../model/Product")

router.post("/categories", async (req, resp) => {
    try {
        const cat = new Category(req.body)
        const result = await cat.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/categories", async (req, resp) => {
    try {

        const result = await Category.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/categories/:id", async (req, resp) => {
    try {

        const result = await Category.findById({ _id: req.params.id });
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/categories/:id", async (req, resp) => {
    try {

        const result = await Category.findByIdAndDelete({ _id: req.params.id });
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/categories/:id", async (req, resp) => {
    try {

        const result = await Category.findByIdAndUpdate({ _id: req.params.id }, req.body);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})






router.post("/products", async (req, resp) => {
    try {
        const prod = new Product(req.body)
        const result = await prod.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products", async (req, resp) => {
    try {

        const result = await Product.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products/:id", async (req, resp) => {
    try {

        const result = await Product.findById({ _id: req.params.id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/products/:id", async (req, resp) => {
    try {

        const result = await Product.findByIdAndDelete({ _id: req.params.id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/products/:id", async (req, resp) => {
    try {

        const result = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/ProductBycat/:id", async (req, resp) => {

    const cid = req.params.id;
    //console.log(cid)
    try {
        const result = await Product.find({ cid: cid })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }

})

module.exports = router