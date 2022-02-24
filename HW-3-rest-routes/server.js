import express from "express";
import { router as coffeeController } from "./controllers/coffee-controller.js";

const app = express()
app.use(express.json())


app.use('/', coffeeController)



app.listen(5001)
console.log("Server is listening on port 5001")