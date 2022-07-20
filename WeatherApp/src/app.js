const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const PORT = 3000;
const waether = require("../util/weatherdata");
const geocode = require("../util/geocode")

const viewPath = path.join(__dirname, "../Templetes/views")
const publicPath = path.join(__dirname, "../public")

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicPath))

app.get("/", (req, resp) => {
    resp.render("home");
})

app.get("/weather", (req, resp) => {

    const city = req.query.location;
    geocode.geocodeData(city, (err, data) => {

        lat = data.lat;
        lng = data.lng;

        waether.waetherData(lat, lng, (err, data) => {

            // resp.render("weather", { "temp": data.temp, "pressure": data.pressure, "humidity": data.Humidity, "city": data.city })
            resp.send({
                temp: data.temp,
                pressure: data.pressure,
                humidity: data.humidity,
                city: data.city

            })

        });

    })
})


app.listen(PORT, (() => {
    console.log("Server running on port " + PORT);
}))


