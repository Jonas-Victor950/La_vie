"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../models/Index");
class AtendimentoRepository {
    getAtendimentos() {
        return Index_1.Atendimento.findAll({
            include: [
                { model: Index_1.Psicologo, attributes: ["psicologo_id", "nome", "email"] },
                { model: Index_1.Paciente },
            ],
        });
    }
    getOneAtendimento(atendimentoId) {
        return Index_1.Atendimento.findOne({
            where: {
                atendimento_id: atendimentoId,
            },
        });
    }
    createAtendimento(dados) {
        return Index_1.Atendimento.create({
            psicologo_id: dados.psicologo_id,
            paciente_id: dados.paciente_id,
            data_atendimento: dados.data_atendimento,
            observacoes: dados.observacoes,
        });
    }
    updateAtendimento(atendimentoId, dados) {
        return Index_1.Atendimento.update({
            psicologo_id: dados.psicologo_id,
            paciente_id: dados.paciente_id,
            data_atendimento: dados.data_atendimento,
            observacoes: dados.observacoes,
        }, {
            where: {
                atendimento_id: atendimentoId,
            },
        });
    }
}
exports.default = new AtendimentoRepository();
