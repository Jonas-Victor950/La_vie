"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../models/Index");
class DashboardRepository {
    countPacientes() {
        return Index_1.Paciente.count();
    }
    countPsicologos() {
        return Index_1.Psicologo.count();
    }
    countAtendimentos() {
        return Index_1.Atendimento.count({
            include: [
                {
                    model: Index_1.Paciente,
                },
                {
                    model: Index_1.Psicologo,
                },
            ],
        });
    }
}
exports.default = new DashboardRepository();
