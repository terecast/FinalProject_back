const express = require('express')
const router = express.Router()
const { getSongs, createSongs, updateSongs, deleteSongs, importSongs, getAlbumArt } = require('../controllers/songController')
const {protect} = require('../midlewares/authMiddleware')
const albumArt = require('album-art')

//Obtener Canciones
router.get('/', protect, getSongs)

//Crear una Cancion
router.post('/', protect, createSongs)

//Modificar una Cancion
router.put('/:id', protect, updateSongs)

//Eliminar una Cancion
router.delete('/:id', protect, deleteSongs)

//import songs
router.get('/import',importSongs)

//albumart
router.get('/album',getAlbumArt)

module.exports = router