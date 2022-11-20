"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../models/Index");
class PsicologoRepository {
    getPsicologos() {
        return Index_1.Psicologo.findAll();
    }
    getOnePsicologo(psicologoId) {
        return Index_1.Psicologo.findOne({
            where: {
                psicologo_id: psicologoId,
            },
        });
    }
    createPsicologo(dados) {
        return Index_1.Psicologo.create({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            apresentacao: dados.apresentacao,
        });
    }
    updatePsicologo(psicologoId, dados) {
        return Index_1.Psicologo.update({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            apresentacao: dados.apresentacao,
        }, {
            where: {
                psicologo_id: psicologoId,
            },
        });
    }
    deletePsicologo(psicologoId) {
        return Index_1.Psicologo.destroy({
            where: {
                psicologo_id: psicologoId,
            },
        });
    }
}
exports.default = new PsicologoRepository();
