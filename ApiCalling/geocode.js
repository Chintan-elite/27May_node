const axios = require("axios");

const geocodeData = (city, callback) => {
    const url = ` `
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