const express = require("express");
const anuncioRouter = express.Router();

const {
    createAnuncio,
    getAllAnuncios,
    getAnuncioById,
    updateAnuncio,
    addAnuncioCover,
    deleteAnuncio,
} = require('../controllers/anuncio.controller');
const { upload, uploadToCloudinary } = require('../middleware/file.middleware')
// const { isAuth } = require('../middlewares/auth.middleware')

anuncioRouter.post("/", createAnuncio);
anuncioRouter.get("/", getAllAnuncios);
anuncioRouter.get("/:id", getAnuncioById);
anuncioRouter.put("/:id", updateAnuncio);
anuncioRouter.patch("/:id", updateAnuncio);
anuncioRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addAnuncioCover);
anuncioRouter.delete("/:id", deleteAnuncio);
module.exports = anuncioRouter;
