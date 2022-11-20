"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PsicologoRepository_1 = __importDefault(require("../repositories/PsicologoRepository"));
class PsicologoService {
    getPsicologos() {
        return PsicologoRepository_1.default.getPsicologos();
    }
    getOnePsicologo(psicologoId) {
        return PsicologoRepository_1.default.getOnePsicologo(psicologoId);
    }
    createPsicologo(dados) {
        return PsicologoRepository_1.default.createPsicologo(dados);
    }
    updatePsicologo(psicologoId, dados) {
        return PsicologoRepository_1.default.updatePsicologo(psicologoId, dados);
    }
    deletePsicologo(psicologoId) {
        return PsicologoRepository_1.default.deletePsicologo(psicologoId);
    }
}
exports.default = new PsicologoService();
