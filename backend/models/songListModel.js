const mongoose = require('mongoose')

const songListSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    song: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Song'
    }
})

module.exports = mongoose.model('SongList', songListSchema)