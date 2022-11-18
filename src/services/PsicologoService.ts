import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import PsicologoRepository from "../repositories/PsicologoRepository";

class PsicologoService {
    getPsicologos(): Promise<Array<PsicologoInterface>> {
        return PsicologoRepository.getPsicologos()
    }

    getOnePsicologo(psicologoId: number): Promise<any> {
        return PsicologoRepository.getOnePsicologo(psicologoId)
    }
}

export default new PsicologoService;