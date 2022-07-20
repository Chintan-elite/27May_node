const axios = require("axios");

const geocodeData = (city, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`
    axios.get(url).then(result => {
        const data = result.data.results[0].geometry;

        const lat = data.lat;
        const lng = data.lng;

        callback(undefined, {
            lat: lat,
            lng: lng

        })

        // console.log(`
        // lat : ${lat},
        // lng : ${lng}

        //`)


    }).catch(err => {
        callback(err);
    })
}

module.exports = { geocodeData }