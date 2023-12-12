const asyncHandler = require('express-async-handler')
const List = require('../models/musicModel')

//GET
const getCanciones = asyncHandler(async (req, res) => {

    const canciones = await List.find({user: req.user._id})
    
    res.status(200).json(canciones)

})

//POST
const createCanciones = asyncHandler(async (req, res) => {
    const { cancion, artista, anio } = req.body
    console.log(req.body)
    if (!cancion || !artista || !anio){
        res.status(400)
        throw new Error ("Faltan datos para crear cancion")
    }
    const list = await List.create({
        cancion, 
        artista,
        anio,
        user: req.user._id

    })
    res.status(201).json(list)

})

//PUT
const updateCanciones = asyncHandler(async (req, res) => {

    const song = await List.findById(req.params.id)

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
        const songUpdated = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(songUpdated)

    }
})


//DELETE
const deleteCanciones = asyncHandler(async (req, res) => {
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
    getCanciones,
    createCanciones,
    updateCanciones,
    deleteCanciones
}