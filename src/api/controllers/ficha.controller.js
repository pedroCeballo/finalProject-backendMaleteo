const Ficha = require('../models/ficha');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createFicha = async (req, res, next) => {
    try {
        console.log(req.body);
        const ficha = await Ficha.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Ficha',
            data: ficha,
        });
    } catch (error) {
        next(error);
    }
};

const getAllFichas = async (req, res, next) => {
    try {
        const fichas = await Ficha.find();
        res.status(200).json({
            status: 200,
            message: 'Has hecho un getAll en Ficha',
            data: fichas,
        });
    } catch (error) {
        next(error);
    }
};

const getFichaById = async (req, res, next) => {
    try {
        const ficha = await Ficha.findById(req.params.id);
        if (ficha) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: ficha,
            });
        } else {
            res.status(404).json({ status: 404, message: "Ficha not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateFicha = async (req, res, next) => {
    try {
        const ficha = await Ficha.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (ficha) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update de Ficha',
                data: ficha,
            });
        } else {
            res.status(404).json({ status: 404, message: "Ficha not found" });
        }
    } catch (error) {
        next(error);
    }
};

const addFichaCover = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 400,
                message: 'No file in the request.'
            });
        }
        const ficha = await Ficha.findByIdAndUpdate(
            req.params.id,
            { coverImage: req.file.path },
            { new: true }
        );

        if (ficha) {
            res.status(200).json({
                status: 200,
                message: 'haz añadido un cover a Ficha',
                data: ficha,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404],
            });
        }
    } catch (error) {
        next(error);
    }
};

const deleteFicha = async (req, res, next) => {
    try {
        const ficha = await Ficha.findByIdAndDelete(req.params.id);
        if (ficha) {
            res.status(204).json({ status: 204, message: "Ficha deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Ficha not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createFicha,
    getAllFichas,
    getFichaById,
    updateFicha,
    addFichaCover,
    deleteFicha,
};
