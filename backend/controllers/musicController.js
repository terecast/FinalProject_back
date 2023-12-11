const asyncHandler = require('express-async-handler')
const List = require('../models/musicModel')

//GET
const getCanciones = asyncHandler(async (req, res) => {

    const canciones = await List.find()
    
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
        anio
    })
    res.status(201).json(list)

})

//PUT
const updateCanciones = asyncHandler(async (req, res) => {
    const song = await List.findById(req.params.id)
    if(!song) {
        res.status(400)
        throw new Error ('Cancion no encontrada')
    }
    const songUpdated = await List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(songUpdated)
  
})


//DELETE
const deleteCanciones = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Se elimino la cancion ${req.params.id}`})

})


module.exports = {
    getCanciones,
    createCanciones,
    updateCanciones,
    deleteCanciones
}