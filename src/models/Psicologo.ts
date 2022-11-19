import { db } from "../database/database";
import { Model, DataTypes, Sequelize} from "sequelize";

export default class Psicologo extends Model {
    senha!: string;
    psicologo_id: any;
    nome: any;
    email: any;
}
Psicologo.init(
    {
        psicologo_id: {
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
        senha: {
            type: DataTypes.STRING,
        },
        apresentacao: {
            type: DataTypes.STRING,
        },
    },
    {
        modelName: 'psicologos',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        sequelize: db
    }
)