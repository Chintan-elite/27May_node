const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
console.log("After the file....");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     //console.log(err)
//     console.log(data);
// })
// console.log("After the file....");

