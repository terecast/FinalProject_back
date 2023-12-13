const express = require('express')
const router = express.Router()
const { getSongList, createSongList, updateSongList, deleteSongOfList } = require('../controllers/songListController')
const {protect} = require('../midlewares/authMiddleware')

//Obtener Canciones
router.get('/', protect, getSongList)

//Crear una Cancion
router.post('/', protect, createSongList)

//Modificar una Cancion
router.put('/:id', protect, updateSongList)

//Eliminar una Cancion
router.delete('/:id', protect, deleteSongOfList)

module.exports = router