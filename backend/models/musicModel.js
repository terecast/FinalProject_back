const mongoose = require('mongoose')

const musicSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cancion: {
        type: String,
        require: (true, 'Por favor escribe el nombre la cancion')
    },
    artista: {
        type: String,
        require: (true, 'Por favor escribe el nombre del artista')

    },
    anio: {
        type: Number,
        require: (true, 'Por favor escribe el año')

    },
    

},{
    timestamps: true
})

module.exports = mongoose.model('List', musicSchema)