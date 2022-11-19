"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Imports Controllers
const PacientesController_1 = __importDefault(require("./controllers/PacientesController"));
const PsicologoController_1 = __importDefault(require("./controllers/PsicologoController"));
const AtendimentosController_1 = __importDefault(require("./controllers/AtendimentosController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
// Imports Middlewares
const auth_1 = __importDefault(require("./middlewares/auth"));
// Imports Validations
const create_1 = __importDefault(require("./validations/psicologos/create"));
const update_1 = __importDefault(require("./validations/psicologos/update"));
const create_2 = __importDefault(require("./validations/pacientes/create"));
const update_2 = __importDefault(require("./validations/pacientes/update"));
const create_3 = __importDefault(require("./validations/atendimentos/create"));
const login_1 = __importDefault(require("./validations/auth/login"));
const param_id_1 = __importDefault(require("./validations/param_id"));
const router = express_1.default.Router();
// Start of Routes Psicologos
router.get("/psicologos", PsicologoController_1.default.allPsicologos);
router.get("/psicologos/:id", param_id_1.default, PsicologoController_1.default.getOne);
router.post("/psicologos", create_1.default, PsicologoController_1.default.create);
router.put("/psicologos/:id", update_1.default, PsicologoController_1.default.update);
router.delete("/psicologos/:id", param_id_1.default, PsicologoController_1.default.delete);
// End of Routes Psicologos
// Start of Routes Pacientes
router.get("/pacientes", PacientesController_1.default.allPacientes);
router.get("/pacientes/:id", param_id_1.default, PacientesController_1.default.getOne);
router.post("/pacientes", create_2.default, PacientesController_1.default.create);
router.put("/pacientes/:id", update_2.default, PacientesController_1.default.update);
router.delete("/pacientes/:id", param_id_1.default, PacientesController_1.default.delete);
// End of Routes Pacientes
router.post("/login", login_1.default, AuthController_1.default.login);
// Start of Routes Atendimentos
router.get("/atendimentos", AtendimentosController_1.default.allAtendimentos);
router.get("/atendimentos/:id", param_id_1.default, AtendimentosController_1.default.getOne);
router.post("/atendimentos", create_3.default, auth_1.default, AtendimentosController_1.default.create);
// End of Routes Atendimentos
exports.default = router;
