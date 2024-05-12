const { text } = require('express');
const mongoose = require('mongoose');
const tarifasSchema = new mongoose.Schema({

    tipo: {
        type: String,
        required: true
    },
    tiempo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})
const Tarifas = mongoose.model('Tarifas', tarifasSchema);
module.exports = Tarifas;