const mongoose = require('mongoose')


const mongoURI = process.env.MONGOURI ||  "mongodb+srv://varshubham:varshubham@cluster0.uroi4c3.mongodb.net/Inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo