const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "Facebook";

MongoClient.connect(connectionURL, (err, client) => {

    if (err) {
        console.log(err);
        return;
    }

    const db = client.db(databaseName);
    console.log("database connection created successfully !!!")

    // db.createCollection("user", (err, result) => {
    //     console.log(result);
    // })

    // const data = { "Name": "Navil", "Email": "navil@gmail.com", "Dept": "Node", "Sal": "5000" };
    // db.collection("user").insertOne(data).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // const data = [{ "Name": "Akshita", "Email": "akshita@gmail.com", "Dept": "Node", "Sal": "7000" },
    // { "Name": "Parth", "Email": "parth@gmail.com", "Dept": "java", "Sal": "9000" },
    // { "Name": "Saurav", "Email": "saurav@gmail.com", "Dept": "php", "Sal": "5000" }]

    // db.collection("user").insertMany(data).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })


    // db.collection("user").find().toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({ Name: "Navil" }).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({}, { projection: { Name: 1, Sal: 1, _id: 0 } }).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({ Name: /^A/ }, { projection: { Name: 1, Sal: 1, _id: 0 } }).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({}, { projection: { Name: 1, Sal: 1, _id: 0 } }).sort({ Name: -1 }).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({}, { projection: { Name: 1, Sal: 1, _id: 0 } }).sort({ Sal: -1 }).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").find({}, { projection: { Name: 1, Sal: 1, _id: 0 } }).limit(2).toArray().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })


    // db.collection("user").updateOne({ Dept: "Node" }, { $set: { Sal: "15000" } }, { upsert: true }).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").updateMany({ Dept: "Node" }, { $set: { Sal: "15000" } }, { upsert: true }).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").deleteOne({ Name: "Parth" }).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").deleteMany({ Dept: "Node" }).then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })

    // db.collection("user").drop().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err);
    // })


    db.collection("author").aggregate([{ $lookup: { from: 'book', localField: 'id', foreignField: 'aid', as: 'BookDetails' } }]).toArray().then(result => {
        console.log(JSON.stringify(result))

    }).catch(err => {
        console.log(err);
    })

})