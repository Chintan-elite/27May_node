
function add(n1, n2, callback) {
    // console.log(n1 + n2);
    callback(n1 + n2);
}

function getResult(result) {
    console.log(result);
}

add(10, 20, getResult);