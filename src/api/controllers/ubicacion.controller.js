const Ubicacion = require('../models/ubicacion');
const { HTTPSTATUSCODE } = require("../../utils/error.util");

const createUbicacion = async (req, res, next) => {
    try {
        console.log(req.body);
        const ubicacion = await Ubicacion.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Ubicacion',
            data: ubicacion,
        });
    } catch (error) {
        next(error);
    }
};

const getAllUbicacions = async (req, res, next) => {
    try {
        const ubicacions = await Ubicacion.find();
        res.status(200).json({
            status: 200,
            message: 'has hecho un getAll en Ubicacion',
            data: ubicacions,
        });
    } catch (error) {
        next(error);
    }
};

const getUbicacionById = async (req, res, next) => {
    try {
        const ubicacion = await Ubicacion.findById(req.params.id);
        if (ubicacion) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: ubicacion,
            });
        } else {
            res.status(404).json({ status: 404, message: "Ubicacion not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateUbicacion = async (req, res, next) => {
    try {
        const ubicacion = await Ubicacion.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (ubicacion) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update en Ubicacion',
                data: ubicacion,
            });
        } else {
            res.status(404).json({ status: 404, message: "Ubicacion not found" });
        }
    } catch (error) {
        next(error);
    }
};

const deleteUbicacion = async (req, res, next) => {
    try {
        const ubicacion = await Ubicacion.findByIdAndDelete(req.params.id);
        if (ubicacion) {
            res.status(204).json({ status: 204, message: "Ubicacion deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Ubicacion not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUbicacion,
    getAllUbicacions,
    getUbicacionById,
    updateUbicacion,
    deleteUbicacion,
};  