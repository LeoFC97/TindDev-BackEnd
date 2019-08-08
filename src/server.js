const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express();


mongoose.connect('mongodb+srv://leonardo:leonardo@cluster0-exdr6.mongodb.net/tindev?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3333)

