const express = require('express')
const usuarioRouter = express.Router();

const { register,
    login,
    logout,
    createUsuario,
    getAllUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
} = require("../controllers/usuario.controller");
const { isAuth } = require("../middleware/auth.middleware");


usuarioRouter.post("/", createUsuario);
usuarioRouter.get("/", getAllUsuarios);
usuarioRouter.get("/:id", getUsuarioById);
usuarioRouter.put("/:id", updateUsuario);
usuarioRouter.delete("/:id", deleteUsuario);
usuarioRouter.post("/register", register);
usuarioRouter.post("/login", login);
usuarioRouter.post("/logout", [isAuth], logout);

module.exports = usuarioRouter;
