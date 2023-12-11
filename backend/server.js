const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { connectDb } = require('./config/db')
const port = process.env.PORT || 5000
const { errorHandler } = require('./midlewares/errorMiddleware')

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/music', require('./routes/musicRoutes'))
app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))