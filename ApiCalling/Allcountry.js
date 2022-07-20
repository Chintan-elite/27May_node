const axios = require("axios")


axios.get("https://restcountries.com/v3.1/all").then(result => {

    for (var i = 0; i < result.data.length; i++) {
        console.log(result.data[i].name.common + " : " + result.data[i].capital)
    }

}).catch(err => {
    console.log(err);
})