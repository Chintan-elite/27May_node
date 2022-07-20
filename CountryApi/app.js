
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

function getCountris() {
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
                row = row + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>";

            }
            city.innerHTML = row;
        })
        .catch(error => console.log('error', error));
}