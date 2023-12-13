const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
 
    song: {
        type: String,
        require: (true, 'Por favor escribe el nombre la cancion')
    },
    artist: {
        type: String,
        require: (true, 'Por favor escribe el nombre del artista')
    },
    album: {
        type: String,
        require: (true, 'Por favor escribe el album')
    },
    year: {
        type: Number,
        require: (true, 'Por favor escribe el año')
    },
})

module.exports = mongoose.model('Song', songSchema)