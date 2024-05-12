const mongoose = require('mongoose');
const fichaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    cuidad: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    fotos: {
        type: String,
        required: true
    },
    fotoLugar: {
        type: String,
        required: true
    },
    fotosLugar: {
        type: [String],
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    tarifa: {
        type: Number,
        required: true
    },
    disponibilidad: {
        type: String,
        require: true,
    },
    email: {
        type: String, trim: true,
        required: true
    }
})
const Ficha = mongoose.model('Ficha', fichaSchema);
module.exports = Ficha;
