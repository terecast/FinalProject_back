const asyncHandler = require('express-async-handler')
const masterList = require('../models/masterList')

//GET
const getSongsMaster = asyncHandler(async (req, res) => {
    const list = await masterList.find({user: req.user._id})
    res.status(200).json(list)
})

//POST
const createSongMaster = asyncHandler(async (req, res) => {
    const { user, name} = req.body
    console.log(req.body)
    if (!user || !name){
        res.status(400)
        throw new Error ("Faltan datos para crear cancion")
    }
    const song = await masterList.create({
        user,
        name
    })
    res.status(201).json(song)

})

//PUT
const updateSongMaster = asyncHandler(async (req, res) => {

    const song = await masterList.findById(req.params.id)

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
        const songMasterUpdated = await masterList.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(songMasterUpdated)

    }
})


//DELETE
const deleteSongMaster = asyncHandler(async (req, res) => {
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
        await masterList.deleteOne(song)
    //const songDeleted = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
    res.status(200).json({id: req.params.id})
    }
})

module.exports = {
    getSongsMaster,
    createSongMaster,
    updateSongMaster,
    deleteSongMaster
}