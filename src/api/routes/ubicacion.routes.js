const express = require('express');
const ubicacionRouter = express.Router();

const {
    createUbicacion,
    getAllUbicacions,
    getUbicacionById,
    updateUbicacion,
    deleteUbicacion,
} = require('../controllers/ubicacion.controller');

ubicacionRouter.post("/", createUbicacion);
ubicacionRouter.get("/", getAllUbicacions);
ubicacionRouter.get("/:id", getUbicacionById);
ubicacionRouter.put("/:id", updateUbicacion);
ubicacionRouter.delete("/:id", deleteUbicacion);

module.exports = ubicacionRouter;