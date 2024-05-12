const express = require('express');
const tarifaRouter = express.Router();

const {
    createTarifa,
    getAllTarifas,
    getTarifaById,
    updateTarifa,
    deleteTarifa,
} = require('../controllers/tarifa.controller');

tarifaRouter.post("/", createTarifa);
tarifaRouter.get("/", getAllTarifas);
tarifaRouter.get("/:id", getTarifaById);
tarifaRouter.put("/:id", updateTarifa);
tarifaRouter.delete("/:id", deleteTarifa);

module.exports = tarifaRouter;