const express = require('express')
const router = express.Router()
const { getCanciones, createCanciones, updateCanciones, deleteCanciones } = require('../controllers/musicController')

//Obtener Canciones
router.get('/', getCanciones)

//Crear una Cancion
router.post('/', createCanciones)

//Modificar una Cancion
router.put('/:id', updateCanciones)

//Eliminar una Cancion
router.delete('/:id', deleteCanciones)

module.exports = router