const asyncHandler = require('express-async-handler')
const Songlist = require('../models/songListModel')

//GET
const getSongList = asyncHandler(async (req, res) => {
    const myList = await Songlist.find({user: req.user._id})
    res.status(200).json(myList)
})

//POST
const createSongList = asyncHandler(async (req, res) => {
    const { user, song} = req.body
    console.log(req.body)
    if (!user || !song){
        res.status(400)
        throw new Error ("Faltan datos para crear cancion")
    }
    const myList = await Songlist.create({
        user,
        song
    })
    res.status(201).json(myList)

})

//PUT
const updateSongList = asyncHandler(async (req, res) => {

    const myListSong = await Songlist.findById(req.params.id)

    //Aqui se verifica que la cancion exista
    if(!myListSong) {
        res.status(400)
        throw new Error ('Cancion no encontrada')
    }
    //verificamos que la cancion le pertenece al user del token dado
    if(myListSong.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
        const mySongListUpdated = await Songlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(mySongListUpdated)

    }
})


//DELETE
const deleteSongOfList = asyncHandler(async (req, res) => {
    const myListSong = await List.findById(req.params.id)
    if(!myListSong) {
        res.status(400)
        throw new Error ('Cancion no encontrada')
    }
    //verificamos que la cancion le pertenece al user del token dado
    if(myListSong.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
        await Songlist.deleteOne(myListSong)
    //const songDeleted = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
    res.status(200).json({id: req.params.id})
    }
})

module.exports = {
    getSongList,
    createSongList,
    updateSongList,
    deleteSongOfList
}