import { db } from "../database/database";
import { Model, DataTypes, Sequelize} from "sequelize";

export default class Paciente extends Model {}
Paciente.init(
    {
        paciente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,  
        },
        idade: {
            type: DataTypes.DATE,
        }
    },
    {
        modelName: 'pacientes',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        sequelize: db
    }
)