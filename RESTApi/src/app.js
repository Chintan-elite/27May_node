const express = require("express")
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/rest").then(() => {
    console.log("Connected!!!!")
}).catch(err => {
    console.log(err);
})


const userrouter = require("../router/userrouter");
const categoryrouter = require("../router/categoryRouter")
app.use("/", userrouter)
app.use("/", categoryrouter)

app.listen(3000, (req, resp) => {
    console.log("Server running on port 3000");
})