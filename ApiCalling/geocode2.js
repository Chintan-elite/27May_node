const axios = require("axios");

const geocodeData = (city) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`
        axios.get(url).then(result => {
            const data = result.data.results[0].geometry;

            const lat = data.lat;
            const lng = data.lng;
            resolve({ lat: lat, lng: lng })
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = { geocodeData }