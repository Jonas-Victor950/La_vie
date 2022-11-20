"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PacienteRepository_1 = __importDefault(require("../repositories/PacienteRepository"));
class PacienteService {
    getPacientes() {
        return PacienteRepository_1.default.getPacientes();
    }
    getOnePaciente(pacienteId) {
        return PacienteRepository_1.default.getOnePaciente(pacienteId);
    }
    createPaciente(dados) {
        return PacienteRepository_1.default.createPaciente(dados);
    }
    updatePaciente(pacienteId, dados) {
        return PacienteRepository_1.default.updatePaciente(pacienteId, dados);
    }
    deletePaciente(pacienteId) {
        return PacienteRepository_1.default.deletePaciente(pacienteId);
    }
}
exports.default = new PacienteService();
