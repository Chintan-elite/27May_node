const express = require("express");
const app = express();
const mongoose = require("mongoose")
const hbs = require("hbs")
const path = require("path");
const PORT = 3000;
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")


mongoose.connect("mongodb+srv://Tops:tops123@cluster0.ccgetvk.mongodb.net/crud?retryWrites=true&w=majority").then(() => {
    console.log("Connnection established successfully!!!!")
}).catch(err => {
    console.log(err);
})


const viewPath = path.join(__dirname, '../templetes/views');
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", viewPath);
app.use(bodyParser.urlencoded({ extended: false }))

const crudrouter = require("../router/crudrouter")
app.use("/", crudrouter);



app.listen(PORT, (req, resp) => {
    console.log("server running on port : " + PORT)
})