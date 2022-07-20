const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Insta").then(() => {
    console.log("database connected successfullu!!!!")
}).catch(err => {
    console.log(err);
})

const userSchema = new mongoose.Schema({

    uname: String,
    email: String,
    password: String

})

const productSchema = new mongoose.Schema({

    pname: {
        type: String,
        enum: ["TV", "Mobile"],

    },
    price: {
        type: Number,
        required: [true, "Price required !!!"]
    },
    qty: Number,
    available: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})




//const User = new mongoose.model("User", userSchema);
const Product = new mongoose.model("Product", productSchema);

// const addUser = async () => {

//     const data = { uname: "Navill", email: "navil@gmial.com", password: "tops123" };
//     try {
//         const user = new User(data);
//         const result = await user.save();
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// addUser();

// const addProduct = () => {

//     // const data1 = new Product({
//     //     pname: "Mobile", price: 500, qty: 10, available: true
//     // })
//     // const data2 = new Product({ pname: "Charger", price: 800, qty: 50, available: true });
//     // const data3 = new Product({ pname: "laptop", price: 45000, qty: 10, available: true });
//     // const data4 = new Product({ pname: "tv", price: 1200, qty: 12, available: true });

//     const data = {
//         pname: "Mobile", qty: 10, available: true
//     }


//     const product = new Product(data);
//     product.save().then(result => {
//         console.log(result)
//     }).catch(err => {
//         console.log(err);
//     })


//     // Product.insertMany([data1, data2, data3, data4]).then(result => {
//     //     console.log(result)
//     // }).catch(err => {
//     //     console.log(err);
//     // })

// }

// addProduct();


// const deletedata = async (value) => {

//     const result = await Product.findByIdAndDelete({ _id: value });
//     console.log(result)


// }

// deletedata("62ce9c64ede5a6f25ce1176d")


const updatedata = async (value) => {

    const data = await Product.updateOne({ _id: value }, { price: 1500 });
    console.log(data)

}

updatedata("62ce9a79aa244f4dde20e30d")