import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import Psicologo from "../models/Psicologo";

class PsicologoRepository {
    getPsicologos(): Promise<Array<any>> {
        return Psicologo.findAll();
    }

    getOnePsicologo(psicologoId: number): Promise<any | null> {
        return Psicologo.findOne({
            where: {
                psicologo_id: psicologoId
            }
        })
    }
}

export default new PsicologoRepository()