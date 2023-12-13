const mongoose = require('mongoose')

const masterListSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        require: (true, 'Por favor escribe el nombre la cancion')
    }
})

module.exports = mongoose.model('MasterList', masterListSchema)