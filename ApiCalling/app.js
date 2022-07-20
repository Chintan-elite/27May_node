const waether = require("./weatherdata");
const geocode = require("./geocode")

const city = process.argv[2];
geocode.geocodeData(city, (err, data) => {

    lat = data.lat;
    lng = data.lng;

    waether.waetherData(lat, lng, (err, data) => {
        console.log(data)
    });

})

