const mongoose = require('mongoose');
const reservaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
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
    estado: {
        type: String,
        required: true
    },
    deposito: {
        type: Date,
        required: true
    },
    retirada: {
        type: Date,
        required: true
    },
    numero_equipaje: {
        type: Number,
        required: true
    }
})
const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;

