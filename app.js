const express = require('express')
const bodyParser = require('body-parser')


const port = 3000
const app = express()
const cars = require('./routes/cars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/app', cars)

app.listen(port, ()=>{
    console.log(`Servidor conrriendo por el puerto: ${port}`);
})