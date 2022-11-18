import { PacienteInterface } from './../interfaces/PacienteInterface';
import PacienteRepository from '../repositories/PacienteRepository';

class PacienteService {
    getPacientes(): Promise<Array<any>> {
        return PacienteRepository.getPacientes()
    }

    getOnePaciente(pacienteId: number): Promise<any> {
        return PacienteRepository.getOnePaciente(pacienteId)
    }

    createPaciente(dados: PacienteInterface): Promise<any> {
        return PacienteRepository.createPaciente(dados)
    }

    updatePaciente(pacienteId: number, dados: PacienteInterface): Promise<Array<any>> {
        return PacienteRepository.updatePaciente(pacienteId, dados)
    }

    deletePaciente(pacienteId: number): Promise<any> {
        return PacienteRepository.deletePaciente(pacienteId)
    }
}

export default new PacienteService; 