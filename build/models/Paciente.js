"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
class Paciente extends sequelize_1.Model {
}
exports.default = Paciente;
Paciente.init({
    paciente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    idade: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    modelName: "pacientes",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: database_1.db,
});
