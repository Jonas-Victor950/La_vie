"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Psicologo_1 = __importDefault(require("../models/Psicologo"));
class PsicologoRepository {
    getPsicologos() {
        return Psicologo_1.default.findAll();
    }
    getOnePsicologo(psicologoId) {
        return Psicologo_1.default.findOne({
            where: {
                psicologo_id: psicologoId
            }
        });
    }
    createPsicologo(dados) {
        return Psicologo_1.default.create({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            apresentacao: dados.apresentacao
        });
    }
    updatePsicologo(psicologoId, dados) {
        return Psicologo_1.default.update({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            apresentacao: dados.apresentacao
        }, {
            where: {
                psicologo_id: psicologoId
            }
        });
    }
    deletePsicologo(psicologoId) {
        return Psicologo_1.default.destroy({
            where: {
                psicologo_id: psicologoId
            }
        });
    }
}
exports.default = new PsicologoRepository();
