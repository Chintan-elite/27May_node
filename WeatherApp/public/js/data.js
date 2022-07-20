
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};



function getAllcountry() {

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => {

            var row = "";
            for (var i = 0; i < result.length; i++) {
                row = row + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>";

            }

            country.innerHTML = row;

        })
        .catch(error => console.log('error', error));



}

var countryId;
function getStates(value) {

    countryId = value;
    fetch(`https://api.countrystatecity.in/v1/countries/${value}/states`, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => {

            var row = "";
            for (var i = 0; i < result.length; i++) {
                row = row + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>";

            }
            state.innerHTML = row;
        })
        .catch(error => console.log('error', error));
}

function getCities(value) {
    fetch(`https://api.countrystatecity.in/v1/countries/${countryId}/states/${value}/cities`, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => {

            var row = "";
            for (var i = 0; i < result.length; i++) {
                row = row + "<option value=" + result[i].name + ">" + result[i].name + "</option>";

            }
            city.innerHTML = row;
        })
        .catch(error => console.log('error', error));
}

function getWeatherdata(city) {


    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const location = city + "," + state + "," + country;

    fetch(`/weather?location=${location}`).then(data => {
        return data.json();
    }).then(result => {
        //console.log(result)
        document.getElementById("cityData").innerHTML = result.city;
        document.getElementById("temp").innerHTML = result.temp;
        document.getElementById("pressure").innerHTML = result.pressure;
        document.getElementById("humidity").innerHTML = result.humidity;

    }).catch(err => {
        console.log(err)
    })


}