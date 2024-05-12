const Maleta = require('../models/maleta');
const { HTTPSTATUSCODE } = require("../../utils/error.util");

const createMaleta = async (req, res, next) => {
    try {
        const maleta = await Maleta.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Maleta',
            data: maleta,
        });
    } catch (error) {
        next(error);
    }
};

const getAllMaletas = async (req, res, next) => {
    try {
        const maletas = await Maleta.find();
        res.status(200).json({
            status: 200,
            message: 'has hecho un getAll en Maleta',
            data: maletas,
        });
    } catch (error) {
        next(error);
    }
};

const getMaletaById = async (req, res, next) => {
    try {
        const maleta = await Maleta.findById(req.params.id);
        if (maleta) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: maleta,
            });
        } else {
            res.status(404).json({ status: 404, message: "Maleta not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateMaleta = async (req, res, next) => {
    try {
        const maleta = await Maleta.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (maleta) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update en Maleta',
                data: maleta,
            });
        } else {
            res.status(404).json({ status: 404, message: "Maleta not found" });
        }
    } catch (error) {
        next(error);
    }
};

const deleteMaleta = async (req, res, next) => {
    try {
        const maleta = await Maleta.findByIdAndDelete(req.params.id);
        if (maleta) {
            res.status(204).json({ status: 204, message: "Maleta deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Maleta not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMaleta,
    getAllMaletas,
    getMaletaById,
    updateMaleta,
    deleteMaleta,
};  