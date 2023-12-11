const getCanciones = (req, res) => {
    console.log('pojp');
    res.status(200).json({message: 'Obtener Canciones'})

}

const createCanciones = (req, res) => {
    res.status(201).json({message: 'Cancion creada'})

}

const updateCanciones = (req, res) => {
    res.status(200).json({message: `Se modifico la cancion ${req.params.id}`})
  

}

const deleteCanciones = (req, res) => {
    res.status(200).json({message: `Se elimino la cancion ${req.params.id}`})

}


module.exports = {
    getCanciones,
    createCanciones,
    updateCanciones,
    deleteCanciones
}