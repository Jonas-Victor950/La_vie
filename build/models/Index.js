"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = exports.Psicologo = exports.Atendimento = void 0;
const Atendimento_1 = __importDefault(require("./Atendimento"));
exports.Atendimento = Atendimento_1.default;
const Psicologo_1 = __importDefault(require("./Psicologo"));
exports.Psicologo = Psicologo_1.default;
const Paciente_1 = __importDefault(require("./Paciente"));
exports.Paciente = Paciente_1.default;
Psicologo_1.default.hasMany(Atendimento_1.default, {
    foreignKey: "atendimento_id",
});
Atendimento_1.default.belongsTo(Psicologo_1.default, {
    foreignKey: "psicologo_id",
});
Paciente_1.default.hasMany(Atendimento_1.default, {
    foreignKey: "atendimento_id",
});
Atendimento_1.default.belongsTo(Paciente_1.default, {
    foreignKey: "paciente_id",
});
