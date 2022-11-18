import express from "express";
import PsicologoController from "./controllers/PsicologoController";
import validateCreate from "./validations/psicologos/create";
import validateUpdate from "./validations/psicologos/update";
const router = express.Router();

// Start of Routes Psicologos
router.get("/psicologos", PsicologoController.allPsicologos)
router.get("/psicologos/:id", PsicologoController.getOne)
router.post("/psicologos", validateCreate, PsicologoController.create)
router.put("/psicologos/:id", validateUpdate, PsicologoController.update)
router.delete("/psicologos/:id", PsicologoController.delete)
// End of Routes Psicologos

export default router