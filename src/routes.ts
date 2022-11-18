import express from "express";

// Imports Controllers
import PacienteController from "./controllers/PacientesController";
import PsicologoController from "./controllers/PsicologoController";

// Imports Validations
import validateCreatePsicologo from "./validations/psicologos/create";
import validateUpdatePsicologo from "./validations/psicologos/update";
import validateCreatePaciente from "./validations/pacientes/create";
import validateUpdatePaciente from "./validations/pacientes/update";

const router = express.Router();

// Start of Routes Psicologos
router.get("/psicologos", PsicologoController.allPsicologos)
router.get("/psicologos/:id", PsicologoController.getOne)
router.post("/psicologos", validateCreatePsicologo, PsicologoController.create)
router.put("/psicologos/:id", validateUpdatePsicologo, PsicologoController.update)
router.delete("/psicologos/:id", PsicologoController.delete)
// End of Routes Psicologos

// Start of Routes Pacientes
router.get("/pacientes", PacienteController.allPacientes)
router.get("/pacientes/:id", PacienteController.getOne)
router.post("/pacientes", validateCreatePaciente, PacienteController.create)
router.put("/pacientes/:id", validateUpdatePaciente, PacienteController.update)
router.delete("/pacientes/:id", PacienteController.delete)
// End of Routes Pacientes

export default router