const express = require('express');
const maletaRouter = express.Router();

const {
    createMaleta,
    getAllMaletas,
    getMaletaById,
    updateMaleta,
    deleteMaleta,
} = require('../controllers/maleta.controller');

maletaRouter.post("/", createMaleta);
maletaRouter.get("/", getAllMaletas);
maletaRouter.get("/:id", getMaletaById);
maletaRouter.put("/:id", updateMaleta);
maletaRouter.delete("/:id", deleteMaleta);

module.exports = maletaRouter;