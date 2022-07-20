
function add() {

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var r = Number(n1) + Number(n2);
    document.getElementById("result").innerHTML = r;

}

function sub() {

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var r = Number(n1) - Number(n2);
    document.getElementById("result").innerHTML = r;

}

function div() {

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var r = Number(n1) / Number(n2);
    document.getElementById("result").innerHTML = r;

}

function mul() {

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var r = Number(n1) * Number(n2);
    document.getElementById("result").innerHTML = r;

}

function text() {

}

setTimeout(() => {
    document.getElementById("text").innerHTML = "Tops Technologies";

}, 5000);

setInterval(() => {
    document.getElementById("dt").innerHTML = new Date();
}, 1000);
