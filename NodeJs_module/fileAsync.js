const { Console } = require("console");
const fs = require("fs");


// fs.mkdir("Practice", (err) => {
//     console.log("dir created....");
// })

fs.writeFile("Practices/hello.txt", "Hello Node ", (err) => {
    if (err)
        console.log("error");
    return;
    console.log("file created...");
})

