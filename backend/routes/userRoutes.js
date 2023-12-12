const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/userController')
const { protect } = require('../midlewares/authMiddleware')


//Registrar user
router.post('/', registrarUser)

//Login user
router.post('/login', loginUser)

//obtener datos usuarios
router.get('/datos', protect, datosUser) //protect

module.exports = router

