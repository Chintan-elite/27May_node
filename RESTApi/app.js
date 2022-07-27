const axios = require("axios");


axios.get("http://192.168.29.22:3000/myapi").then(result => {
    for (var i = 0; i < result.data.length; i++) {
        const dt = result.data[i];
        console.log(dt.proname)
    }

}).catch(err => {
    console.log(err);
})