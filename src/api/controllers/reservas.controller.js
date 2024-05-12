const Reserva = require('../models/reservas');
const { HTTPSTATUSCODE } = require("../../utils/error.util");

const createReserva = async (req, res, next) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Reserva',
            data: reserva,
        });
    } catch (error) {
        next(error);
    }
};

const getAllReservas = async (req, res, next) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json({
            status: 200,
            message: 'has hecho un getAll en Reserva',
            data: reservas,
        });
    } catch (error) {
        next(error);
    }
};

const getReservaById = async (req, res, next) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (reserva) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: reserva,
            });
        } else {
            res.status(404).json({ status: 404, message: "Reserva not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateReserva = async (req, res, next) => {
    try {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (reserva) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update en Reserva',
                data: reserva,
            });
        } else {
            res.status(404).json({ status: 404, message: "Reserva not found" });
        }
    } catch (error) {
        next(error);
    }
};

const deleteReserva = async (req, res, next) => {
    try {
        const reserva = await Reserva.findByIdAndDelete(req.params.id);
        if (reserva) {
            res.status(204).json({ status: 204, message: "Reserva deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Reserva not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createReserva,
    getAllReservas,
    getReservaById,
    updateReserva,
    deleteReserva,
};  