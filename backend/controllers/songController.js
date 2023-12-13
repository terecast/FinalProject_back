const asyncHandler = require('express-async-handler')
const Song = require('../models/songModel')
const albumArt = require('album-art')

//IMPORT
const importSongs = asyncHandler(async (req,res) => {
    const data = require('../data/songs.json')
    console.log(data)

    Song.collection.insertMany(data,function(err,r){
        console.log(r.insertedCount)
    });

    res.status(200).json({"message" : "success"})

})

//GET COVER
const getAlbumArt = asyncHandler(async (req,res) => {

    const albumResponse = await albumArt(req.query.artist,{ album : req.query.album})
    res.status(200).json({"album" : albumResponse})

})

//GET
const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find({user: req.user._id})
    res.status(200).json(songs)
})

//POST
const createSongs = asyncHandler(async (req, res) => {
    const { song, artist, album, year } = req.body
    console.log(req.body)
    if (!song || !artist || !album, !year){
        res.status(400)
        throw new Error ("Faltan datos para crear cancion")
    }
    const list = await Song.create({
        song, 
        artist,
        album,
        year
    })
    res.status(201).json(list)

})

//PUT
const updateSongs = asyncHandler(async (req, res) => {

    const song = await Song.findById(req.params.id)

    //Aqui se verifica que la cancion exista
    if(!song) {
        res.status(400)
        throw new Error ('Cancion no encontrada')
    }
    //verificamos que la cancion le pertenece al user del token dado
    if(song.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
        const songUpdated = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(songUpdated)

    }
})


//DELETE
const deleteSongs = asyncHandler(async (req, res) => {
    const song = await List.findById(req.params.id)
    if(!song) {
        res.status(400)
        throw new Error ('Cancion no encontrada')
    }
    //verificamos que la cancion le pertenece al user del token dado
    if(song.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
        await List.deleteOne(song)
    //const songDeleted = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
    res.status(200).json({id: req.params.id})

    }
})


module.exports = {
    getSongs,
    createSongs,
    updateSongs,
    deleteSongs,
    importSongs,
    getAlbumArt
}