import coffeeDal from "../data-acsess-layer/coffee-dal.js";
import Joi from "joi";

const getAll = () => {
    return coffeeDal.getAll()
}

const getById = id => {
    const coffee = coffeeDal.getAll()
    console.log(coffee)
    const coffeeToJson = JSON.parse(coffee)
    console.log(coffeeToJson)
    let requestedCoffee = coffeeToJson.find(coffeeItem => coffeeItem.id === id)
    return requestedCoffee ? requestedCoffee : {}
}

const addCoffee = newCoffee => {
    const coffee = coffeeDal.getAll()
    const coffeeToJson = JSON.parse(coffee)
    const lastId = coffeeToJson[coffeeToJson.length - 1].id

    const preparedCoffeeObj = {
        id: lastId + 1,
        ...newCoffee
    }
    coffeeDal.addCoffee(preparedCoffeeObj)
    return preparedCoffeeObj

}

const checkPostValidation = () => {
    let schema = Joi.object().keys({
        "type": Joi.required().min(3).max(50),
        "price": Joi.required().min(1).max(300),
        "strength": Joi.required().integer().greater(0).less(5)
    })
    return schema.validate()
}

export default {
    getAll,
    getById,
    addCoffee,
    checkPostValidation
}