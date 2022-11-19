"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../models/Index");
class PacienteRepository {
    getPacientes() {
        return Index_1.Paciente.findAll();
    }
    getOnePaciente(pacienteId) {
        return Index_1.Paciente.findOne({
            where: {
                paciente_id: pacienteId,
            },
        });
    }
    createPaciente(dados) {
        return Index_1.Paciente.create({
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade,
        });
    }
    updatePaciente(pacienteId, dados) {
        return Index_1.Paciente.update({
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade,
        }, {
            where: {
                paciente_id: pacienteId,
            },
        });
    }
    deletePaciente(pacienteId) {
        return Index_1.Paciente.destroy({
            where: {
                paciente_id: pacienteId,
            },
        });
    }
}
exports.default = new PacienteRepository();
