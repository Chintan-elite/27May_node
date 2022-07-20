const geocode = require("./geocode2")


// geocode.geocodeData("surat,gujarat").then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

const getLatlng = async () => {

    const result = await geocode.geocodeData("surat,gujarat");
    console.log(result);
}

getLatlng();