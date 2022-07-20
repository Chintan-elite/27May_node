const express = require("express");
const app = express();
const PORT = 3000;
const hbs = require("hbs");
const path = require("path");
const waether = require("../util/weatherdata");
const geocode = require("../util/geocode")

const viewPath = path.join(__dirname, "../templetes/views")
const partialPath = path.join(__dirname, "../templetes/partials")
const staticPath = path.join(__dirname, "../public")

app.set("view engine", "hbs");
app.set('views', viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath))

app.get("/", (req, resp) => {
    resp.render("index")
})

app.get("/about", (req, resp) => {
    resp.render("about")
})

app.get("/contact", (req, resp) => {
    resp.render("contact")
})

app.get("/weather", (req, resp) => {


    const city = req.query.location;
    console.log(city)
    geocode.geocodeData(city, (err, data) => {

        lat = data.lat;
        lng = data.lng;

        waether.waetherData(lat, lng, (err, data) => {
            //console.log(data)
            resp.render("weather", { "temp": data.temp, "pressure": data.pressure, "humidity": data.Humidity, "city": data.city })
        });

    })


})


app.listen(PORT, () => {
    console.log("sewrver running on port " + PORT)
})