const mongoose = require('mongoose');
const anuncioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    espacio: {
        type: String,
        required: true
    },
    fotos: {
        type: String,
        required: true
    },
    propiedad: {
        type: String,
        required: true
    }
})
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
module.exports = Anuncio;
