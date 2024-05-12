const express = require('express');
const reservaRouter = express.Router();

const {
    createReserva,
    getAllReservas,
    getReservaById,
    updateReserva,
    deleteReserva,
} = require('../controllers/reservas.controller');

reservaRouter.post("/", createReserva);
reservaRouter.get("/", getAllReservas);
reservaRouter.get("/:id", getReservaById);
reservaRouter.put("/:id", updateReserva);
reservaRouter.delete("/:id", deleteReserva);

module.exports = reservaRouter;