const { readdirSync } = require("fs")
const path = require("path")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const helmet = require("helmet")
const dotenv = require("dotenv")
dotenv.config({path: './.env'})
const morgan = require("morgan");
const cors = require("cors")


// middleware implementation
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())


// server
const port = process.env.PORT || 8000


// connect to DB and start server
mongoose.connect(process.env.DATABASE).catch(error => console.log(error))
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
