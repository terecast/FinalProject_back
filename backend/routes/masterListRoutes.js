const express = require('express')
const router = express.Router()
const { getSongsMaster, createSongMaster, updateSongMaster, deleteSongMaster } = require('../controllers/masterListController')
const {protect} = require('../midlewares/authMiddleware')

//Obtener Canciones
router.get('/', protect, getSongsMaster)

//Crear una Cancion
router.post('/', protect, createSongMaster)

//Modificar una Cancion
router.put('/:id', protect, updateSongMaster)

//Eliminar una Cancion
router.delete('/:id', protect, deleteSongMaster)

module.exports = router