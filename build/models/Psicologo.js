"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
class Psicologo extends sequelize_1.Model {
}
exports.default = Psicologo;
Psicologo.init({
    psicologo_id: {
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
    senha: {
        type: sequelize_1.DataTypes.STRING,
    },
    apresentacao: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    modelName: 'psicologos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: database_1.db
});
