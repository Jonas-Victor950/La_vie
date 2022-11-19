import express from "express";

// Imports Controllers
import PacienteController from "./controllers/PacientesController";
import PsicologoController from "./controllers/PsicologoController";
import AtendimentoController from "./controllers/AtendimentosController";
import AuthController from "./controllers/AuthController";

// Imports Middlewares
import auth from "./middlewares/auth";

// Imports Validations
import validateCreatePsicologo from "./validations/psicologos/create";
import validateUpdatePsicologo from "./validations/psicologos/update";
import validateCreatePaciente from "./validations/pacientes/create";
import validateUpdatePaciente from "./validations/pacientes/update";
import validateCreateAtendimento from "./validations/atendimentos/create";
import ValidateLogin from "./validations/auth/login";
import validateParamId from "./validations/param_id";

const router = express.Router();

// Start of Routes Psicologos
router.get("/psicologos", PsicologoController.allPsicologos);
router.get("/psicologos/:id", validateParamId, PsicologoController.getOne);
router.post("/psicologos", validateCreatePsicologo, PsicologoController.create);
router.put(
  "/psicologos/:id",
  validateUpdatePsicologo,
  PsicologoController.update
);
router.delete("/psicologos/:id", validateParamId, PsicologoController.delete);
// End of Routes Psicologos

// Start of Routes Pacientes
router.get("/pacientes", PacienteController.allPacientes);
router.get("/pacientes/:id", validateParamId, PacienteController.getOne);
router.post("/pacientes", validateCreatePaciente, PacienteController.create);
router.put("/pacientes/:id", validateUpdatePaciente, PacienteController.update);
router.delete("/pacientes/:id", validateParamId, PacienteController.delete);
// End of Routes Pacientes

router.post("/login", ValidateLogin, AuthController.login);

// Start of Routes Atendimentos
router.get("/atendimentos", AtendimentoController.allAtendimentos);
router.get("/atendimentos/:id", validateParamId, AtendimentoController.getOne);
router.post(
  "/atendimentos",
  validateCreateAtendimento,
  auth,
  AtendimentoController.create
);
// End of Routes Atendimentos

export default router;
