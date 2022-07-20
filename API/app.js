
var lat = 22.3072
var lng = 73.1812

var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c78a76af15cc5843caa7b5f44e1623e`;

var t = document.getElementById("temp");

fetch(url).then((result) => {
    return result.json();
}).then((data) => {
    var pressure = data.main.pressure;
    var humidity = data.main.humidity;
    var temp = data.main.temp;
    console.log(pressure + " " + humidity + " " + temp)
    t.innerHTML = temp;
}).catch((err) => {
    console.log(err)
})