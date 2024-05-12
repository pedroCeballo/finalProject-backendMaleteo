const express = require("express");
const guardianRouter = express.Router();

const {
    createGuardian,
    getAllGuardians,
    getGuardianById,
    updateGuardian,
    addGuardianCover,
    deleteGuardian,
} = require('../controllers/guardian.controller');
const { upload, uploadToCloudinary } = require('../middleware/file.middleware')
// const { isAuth } = require('../middlewares/auth.middleware')

guardianRouter.post("/", createGuardian);
guardianRouter.get("/", getAllGuardians);
guardianRouter.get("/:id", getGuardianById);
guardianRouter.put("/:id", updateGuardian);
guardianRouter.patch("/:id", updateGuardian);
guardianRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addGuardianCover);
guardianRouter.delete("/:id", deleteGuardian);
module.exports = guardianRouter;