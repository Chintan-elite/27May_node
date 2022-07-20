
const fs = require("fs");

const createfile = (dt) => {

    const alldata = loadData();

    const duplicate = alldata.find((theTitle) => {
        return theTitle.title === dt.title;
    })

    if (duplicate) {
        console.log("Title alredy exist !!!");
        return;
    }

    alldata.push(dt)
    var data = JSON.stringify(alldata);
    fs.writeFile("book.json", data, (err) => {
        console.log("data written successfully...!!!'")
    })
}

const readFile = () => {
    const alldata = loadData();
    console.log(alldata);
}


const loadData = () => {
    try {
        const data = fs.readFileSync("book.json", "utf-8")
        const alldata = JSON.parse(data);
        return alldata;
    } catch (error) {
        return [];
    }
}
const removedata = (title) => {
    const alldata = loadData();

    const data = alldata.filter((theData) => {
        return theData.title != title;
    })
    console.log(data)
    var dt = JSON.stringify(data);
    console.log(dt)
    fs.writeFile("book.json", dt, (err) => {
        console.log("data update successfully...!!!'")
    })

}



module.exports = { createfile, readFile, removedata }