
const axios = require("axios")

const waetherData = (lat, lng, mydata) => {

    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c78a76af15cc5843caa7b5f44e1623e&units=metric`;


    axios.get(url).then(result => {
        const main = result.data.main
        const city = result.data.name;
        const pressure = main.pressure;
        const humidity = main.humidity;
        const temp = main.temp;

        mydata(undefined, {
            city, pressure, humidity, temp
        })

        //     console.log(`

        // City : ${city}
        // Temp : ${temp}
        // Pressure : ${pressure}
        // Humidity : ${humidity}

        // `)

    }).catch(err => {
        mydata(err);
    })



}


module.exports = { waetherData };