const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/music', require('./routes/musicRoutes'))


app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))