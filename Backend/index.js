const connectToMongo = require('./db')
const express=require('express')
var cors= require('cors')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config();

connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())


app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/note.js'))


__dirname = path.resolve();
if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname,"/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"build","index.html"))
    })
}
else{
    app.get("/",(req,res)=>{
        res.send("api is running")
    })
}


app.listen(port,()=>{
    console.log(`example app is listening at http://localhost:${port}`)
})