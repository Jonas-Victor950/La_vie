"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PsicologoController_1 = __importDefault(require("./controllers/PsicologoController"));
const create_1 = __importDefault(require("./validations/psicologos/create"));
const update_1 = __importDefault(require("./validations/psicologos/update"));
const router = express_1.default.Router();
// Start of Routes Psicologos
router.get("/psicologos", PsicologoController_1.default.allPsicologos);
router.get("/psicologos/:id", PsicologoController_1.default.getOne);
router.post("/psicologos", create_1.default, PsicologoController_1.default.create);
router.put("/psicologos/:id", update_1.default, PsicologoController_1.default.update);
router.delete("/psicologos/:id", PsicologoController_1.default.delete);
// End of Routes Psicologos
exports.default = router;
