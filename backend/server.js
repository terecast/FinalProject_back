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


app.use('/api/songs', require('./routes/songRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/songlist', require('./routes/songListRoutes'))
app.use('/api/masterlist', require('./routes/masterListRoutes'))
app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))