

const empid = new Promise((resolve, reject) => {
    setTimeout(() => {
        const allEmp = [10, 20, 30, 40, 50, 60];
        resolve(allEmp)
        reject("Id not found...")
    }, 2000);
})


const empdetails = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout((eid) => {
            const edata = {
                "name": "tops",
                "email": "tops@gmail.com"
            }
            resolve(`emp id is ${eid} and emp name is ${edata.name}`)
        }, 2000, id);
    })
}





// empid.then(result => {
//     console.log(result)
//     return empdetails(result[1]);
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })


const getId = async () => {
    try {
        const result = await empid;
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}


getId();