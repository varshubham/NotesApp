const connectToMongo = require('./db')
const express=require('express')
var cors= require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())


app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/note.js'))

if(process.env.NODE_ENV==="production")
{
    app.use(express.static('../build'))
}

app.listen(port,()=>{
    console.log(`example app is listening at http://localhost:${port}`)
})