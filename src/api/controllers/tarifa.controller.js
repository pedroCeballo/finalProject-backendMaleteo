const Tarifa = require('../models/tarifa');
const { HTTPSTATUSCODE } = require("../../utils/error.util");

const createTarifa = async (req, res, next) => {
    try {
        const tarifa = await Tarifa.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en tarifa',
            data: tarifa,
        });
    } catch (error) {
        next(error);
    }
};

const getAllTarifas = async (req, res, next) => {
    try {
        const tarifas = await Tarifa.find();
        res.status(200).json({
            status: 200,
            message: 'has hecho un getAll en tarifa',
            data: tarifas,
        });
    } catch (error) {
        next(error);
    }
};

const getTarifaById = async (req, res, next) => {
    try {
        const tarifa = await Tarifa.findById(req.params.id);
        if (tarifa) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: tarifa,
            });
        } else {
            res.status(404).json({ status: 404, message: "Tarifa not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateTarifa = async (req, res, next) => {
    try {
        const tarifa = await Tarifa.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (tarifa) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update en tarifa',
                data: tarifa,
            });
        } else {
            res.status(404).json({ status: 404, message: "Tarifa not found" });
        }
    } catch (error) {
        next(error);
    }
};

const deleteTarifa = async (req, res, next) => {
    try {
        const tarifa = await Tarifa.findByIdAndDelete(req.params.id);
        if (tarifa) {
            res.status(204).json({ status: 204, message: "Tarifa deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Tarifa not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTarifa,
    getAllTarifas,
    getTarifaById,
    updateTarifa,
    deleteTarifa,
};  