const mongoose = require('mongoose');
const ubicacionSchema = new mongoose.Schema({

    fotoLugar: {
        type: String,
        required: true,
    },
    imgUsuario: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    valoracion: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    latitud: {
        type: String,
        required: true,
    },
    longitud: {
        type: String,
        required: true,
    }
})
const Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);
module.exports = Ubicacion;