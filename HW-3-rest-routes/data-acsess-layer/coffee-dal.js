import path from 'path'
import * as fs from 'fs'
const databasePath= path.resolve('') +'/database/database.json'


const getAll = () => {
    const data = fs.readFileSync(databasePath,
            {encoding:'utf8', flag:'r'});

    return data
}

const addCoffee = preparedCoffeeObj => {
    const data = fs.readFileSync(databasePath,
    {encoding:'utf8', flag:'r'});
    const dataToJson = JSON.parse(data)
    dataToJson.push(preparedCoffeeObj)
    // console.log(preparedCoffeeObj)
    const coffeeObj = JSON.stringify(dataToJson)
    console.log(coffeeObj)
    fs.writeFileSync(databasePath, coffeeObj, err => {
        if (err) {
          console.error(err)
        }
      })
}

export default {
    getAll,
    addCoffee
}