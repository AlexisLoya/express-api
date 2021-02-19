const express = require('express')
const mongojs = require('mongojs')
const router = express.Router()
const db = mongojs("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lmeer.mongodb.net/agency")

router.get('/car', (request, response) => {
    db.cars.find((err, cars) => {
        if(err){
            response.send(err)
        }
        response.json(cars)
    })
})

router.get('/car/:id', (req, res) =>{
    mongo.cars.findOne({_id: mongojs.ObjectId(req.params.id)},(err, cars) =>{
        if (err) {
            res.send(err)
        }
        res.json(cars)
    })

})

router.post('/car',(request, response) =>{
    const car = request.body
    if (!car.brand){
        request.status(400)
        request.json
    }
})

module.exports=router
