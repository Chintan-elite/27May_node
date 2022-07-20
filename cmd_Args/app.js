

//console.log(process.argv)


var n1 = process.argv[2];
var n2 = process.argv[3];
var choice = process.argv[4];
if (choice === "add") {
    console.log("add method calling.....");
    var r = Number(n1) + Number(n2);
    console.log("addition is : " + r);
} else if (choice === "sub") {
    console.log("sub method calling.....");
    var r = Number(n1) - Number(n2);
    console.log("sustraction is : " + r);
} else if (choice === "mul") {
    console.log("mul method calling.....");
    var r = Number(n1) * Number(n2);
    console.log("multiplication is : " + r);
} else if (choice === "div") {
    console.log("div method calling.....");
    var r = Number(n1) / Number(n2);
    console.log("division is : " + r);
}