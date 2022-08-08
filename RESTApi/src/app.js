const express = require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path")
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/rest").then(() => {
    console.log("Connected!!!!")
}).catch(err => {
    console.log(err);
})

const publicPath = path.join(__dirname, "../public")
app.use(express.static(publicPath))

const userrouter = require("../router/userrouter");
const categoryrouter = require("../router/categoryRouter")
const cartrouter = require("../router/cartrouter")
app.use("/", userrouter)
app.use("/", categoryrouter)
app.use("/", cartrouter)

app.listen(3000, (req, resp) => {
    console.log("Server running on port 3000");
})