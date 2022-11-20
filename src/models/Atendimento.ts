import { db } from "../database/database";
import { Model, DataTypes, Sequelize } from "sequelize";

// Imports Models
import Paciente from "./Paciente";
import Psicologo from "./Psicologo";

export default class Atendimento extends Model {}
Atendimento.init(
  {
    atendimento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Paciente,
        key: "paciente_id",
      },
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologo,
        key: "psicologo_id",
      },
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacoes: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "atendimentos",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: db,
  }
);
