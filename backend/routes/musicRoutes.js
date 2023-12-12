const express = require('express')
const router = express.Router()
const { getCanciones, createCanciones, updateCanciones, deleteCanciones } = require('../controllers/musicController')
const {protect} = require('../midlewares/authMiddleware')

//Obtener Canciones
router.get('/', protect, getCanciones)

//Crear una Cancion
router.post('/', protect, createCanciones)

//Modificar una Cancion
router.put('/:id', protect, updateCanciones)

//Eliminar una Cancion
router.delete('/:id', protect, deleteCanciones)

module.exports = router