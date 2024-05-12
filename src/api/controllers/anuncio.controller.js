const Anuncio = require('../models/anuncio');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createAnuncio = async (req, res, next) => {
    try {
        const anuncio = await Anuncio.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Anuncio',
            data: anuncio,
        });
    } catch (error) {
        next(error);
    }
};

const getAllAnuncios = async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find();
        res.status(200).json({
            status: 200,
            message: 'Has hecho un getAll en Anuncio',
            data: anuncios,
        });
    } catch (error) {
        next(error);
    }
};

const getAnuncioById = async (req, res, next) => {
    try {
        const anuncio = await Anuncio.findById(req.params.id);
        if (anuncio) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: anuncio,
            });
        } else {
            res.status(404).json({ status: 404, message: "Anuncio not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateAnuncio = async (req, res, next) => {
    try {
        const anuncio = await Anuncio.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (anuncio) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update de Anuncio',
                data: anuncio,
            });
        } else {
            res.status(404).json({ status: 404, message: "Anuncio not found" });
        }
    } catch (error) {
        next(error);
    }
};

const addAnuncioCover = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 400,
                message: 'No file in the request.'
            });
        }
        const anuncio = await Anuncio.findByIdAndUpdate(
            req.params.id,
            { coverImage: req.file.path },
            { new: true }
        );

        if (anuncio) {
            res.status(200).json({
                status: 200,
                message: 'haz añadido un cover a Anuncio',
                data: anuncio,
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

const deleteAnuncio = async (req, res, next) => {
    try {
        const anuncio = await Anuncio.findByIdAndDelete(req.params.id);
        if (anuncio) {
            res.status(204).json({ status: 204, message: "Anuncio deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Anuncio not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAnuncio,
    getAllAnuncios,
    getAnuncioById,
    updateAnuncio,
    addAnuncioCover,
    deleteAnuncio,
};
