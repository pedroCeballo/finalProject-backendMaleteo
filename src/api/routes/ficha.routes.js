const express = require("express");
const fichaRouter = express.Router();

const {
    createFicha,
    getAllFichas,
    getFichaById,
    updateFicha,
    addFichaCover,
    deleteFicha,
} = require('../controllers/ficha.controller');
const { upload, uploadToCloudinary } = require('../middleware/file.middleware')
// const { isAuth } = require('../middlewares/auth.middleware')

fichaRouter.post("/", createFicha);
fichaRouter.get("/", getAllFichas);
fichaRouter.get("/:id", getFichaById);
fichaRouter.put("/:id", updateFicha);
fichaRouter.patch("/:id", updateFicha);
fichaRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addFichaCover);
fichaRouter.delete("/:id", deleteFicha);
module.exports = fichaRouter;