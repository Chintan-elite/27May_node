const express = require("express");
const app = express();
const path = require("path")


app.get("/", (req, resp) => {
    // resp.send("This is home page")
    resp.sendFile(path.join(__dirname, "home.html"));
})

app.get("/about", (req, resp) => {
    //resp.send("This is about us page")
    // resp.json({
    //     "Name": "tops",
    //     "email": "tops@gmail.com"
    // })
    const dt = req.query.abc;
    console.log(dt)
    resp.sendFile(path.join(__dirname, "about.html"))
})

app.get("/contact", (req, resp) => {
    //resp.send("This is contact us page")
    resp.sendFile(path.join(__dirname, "contact.html"))
})

app.get("*", (req, resp) => {
    //resp.send("404 page not found")
    resp.sendFile(path.join(__dirname, "error.html"))
})


app.listen(3000, (req, resp) => {
    console.log("Server running on port 3000")
})
