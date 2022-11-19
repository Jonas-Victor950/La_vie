import { PacienteInterface } from "../interfaces/PacienteInterface";
import { Paciente } from "../models/Index";

class PacienteRepository {
    getPacientes(): Promise<Array<any>> {
        return Paciente.findAll()
    }

    getOnePaciente(pacienteId: number): Promise<any | null> {
        return Paciente.findOne({
            where: {
                paciente_id: pacienteId
            }
        })
    }

    createPaciente(dados: PacienteInterface): Promise<any> {
        return Paciente.create({
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade
        })
    }

    updatePaciente(pacienteId: number, dados: PacienteInterface): Promise<Array<any>> {
        return Paciente.update({
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade
        },
        {
            where: {
                paciente_id: pacienteId
            }
        })
    }

    deletePaciente(pacienteId: number): Promise<any> {
        return Paciente.destroy({
            where: {
                paciente_id: pacienteId
            }
        })
    }
}

export default new PacienteRepository