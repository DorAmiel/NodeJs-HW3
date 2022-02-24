import express from "express";
import coffeeBL from "../business-logic/coffee-BL.js";



const router = express.Router()
const baseUrl = '/api'


router.get(`${baseUrl}/coffee`, (req, res) => {
    let result = coffeeBL.getAll()
    res.send(result)
})

router.get(`${baseUrl}/coffee/:id`, (req, res) => {
    let id = +req.params.id
    let result = coffeeBL.getById(id)
    res.send(result)
})

router.post(`${baseUrl}/coffee`, (req, res) => {
    let newCoffee = req.body
    coffeeBL.checkPostValidation(newCoffee)
    let result = coffeeBL.addCoffee(newCoffee)
    res.send(result)
})

//Error Handling

router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

router.use((error,req, res, next) => {
    res.status(error.status || 500)
    .send(error.message)
   
})


//Validation



export {
    router
}