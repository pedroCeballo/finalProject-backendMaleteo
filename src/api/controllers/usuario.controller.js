const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const register = async (req, res, next) => {
    try {
        const usuario = new Usuario(req.body);

        const usuarioExist = await Usuario.findOne({ email: usuario.email });
        if (usuarioExist) {
            return next(setError("404", "This email has already been used."));
        }
        const usuarioDB = await usuario.save();
        return res.status(201).json({
            status: 201,
            message: `Usuario ${usuarioDB.email} created`,
        });
    } catch (error) {
        return next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const usuarioInfo = await Usuario.findOne({ email: req.body.email });

        if (req.body.contraseña === usuarioInfo.contraseña) {
            // usuarioInfo.contraseña = "*************"; ocultamos el dato contraseña en la respuesta por seguridad
            const token = jwt.sign(
                {
                    id: usuarioInfo._id,
                    email: usuarioInfo.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            return res.status(200).json({
                data: { massage: "todo genial", usuario: usuarioInfo, token: token },
            });
        } else {
            return res.json({
                status: 400,
                message: "la contraseña es incorrecto",
                data: null,
            });
        }
    } catch (error) {
        return next(error);
    }
};

const logout = (req, res, next) => {
    try {
        const token = null;
        return res.status(200).json({
            status: 200,
            message: "Logout successful",
        });
    } catch (error) {
        return next(setError(error.statusCode, "Logout Error"));
    }
};

const createUsuario = async (req, res, next) => {
    try {
        console.log(req.body);
        const usuario = await Usuario.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'haz echo un post en Usuario',
            data: usuario,
        });
    } catch (error) {
        next(error);
    }
};

const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            status: 200,
            message: 'has hecho un getAll en Usuario',
            data: usuarios,
        });
    } catch (error) {
        next(error);
    }
};

const getUsuarioById = async (req, res, next) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un get por id',
                data: usuario,
            });
        } else {
            res.status(404).json({ status: 404, message: "Usuario not found" });
        }
    } catch (error) {
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (usuario) {
            res.status(200).json({
                status: 200,
                message: 'has hecho un update en Usuario',
                data: usuario,
            });
        } else {
            res.status(404).json({ status: 404, message: "Usuario not found" });
        }
    } catch (error) {
        next(error);
    }
};

const deleteUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (usuario) {
            res.status(204).json({ status: 204, message: "Usuario deleted" });
        } else {
            res.status(404).json({ status: 404, message: "Usuario not found" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    logout,
    createUsuario,
    getAllUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
};
