const Guardian = require('../models/guardian');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createGuardian = async (req, res, next) => {
    try {
        console.log(req.body);
        const guardian = await Guardian.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Guardian',
            data: guardian,
        });
    } catch (error) {
        next(error);
    }
};

const getAllGuardians = async (req, res, next) => {
    try {
        const guardians = await Guardian.find();
        res.status(200).json({
            status: 200,
            message: 'Has hecho un getAll en Guardian',
            data: guardians,
        });
    } catch (error) {
        next(error);
    }
};

const getGuardianById = async (req, res, next) => {
    try {
        const guardian = await Guardian.findById(req.params.id);
        if (guardian) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: guardian,
            });
        } else {
            res.status(404).json({ status: 404, message: "Guardian not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateGuardian = async (req, res, next) => {
    try {
        const guardian = await Guardian.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (guardian) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update de Guardian',
                data: guardian,
            });
        } else {
            res.status(404).json({ status: 404, message: "Guardian not found" });
        }
    } catch (error) {
        next(error);
    }
};

const addGuardianCover = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 400,
                message: 'No file in the request.'
            });
        }
        const guardian = await Guardian.findByIdAndUpdate(
            req.params.id,
            { coverImage: req.file.path },
            { new: true }
        );

        if (guardian) {
            res.status(200).json({
                status: 200,
                message: 'haz añadido un cover a Guardian',
                data: guardian,
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

const deleteGuardian = async (req, res, next) => {
    try {
        const guardian = await Guardian.findByIdAndDelete(req.params.id);
        if (guardian) {
            res.status(204).json({ status: 204, message: "Guardian deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Guardian not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createGuardian,
    getAllGuardians,
    getGuardianById,
    updateGuardian,
    addGuardianCover,
    deleteGuardian,
};
