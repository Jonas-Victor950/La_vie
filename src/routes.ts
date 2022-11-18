import express from "express";
import PsicologoController from "./controllers/PsicologoController";
const router = express.Router();

// Start of Routes
router.get("/psicologos", PsicologoController.allPsicologos)
// End of Routes

export default router