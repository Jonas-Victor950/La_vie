"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
// Imports Models
const Paciente_1 = __importDefault(require("./Paciente"));
const Psicologo_1 = __importDefault(require("./Psicologo"));
class Atendimento extends sequelize_1.Model {
}
exports.default = Atendimento;
Atendimento.init({
    atendimento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Paciente_1.default,
            key: "paciente_id",
        },
    },
    psicologo_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Psicologo_1.default,
            key: "psicologo_id",
        },
    },
    data_atendimento: {
        type: sequelize_1.DataTypes.DATE,
    },
    observacoes: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: "atendimentos",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: database_1.db,
});
