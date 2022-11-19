import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import PsicologoRepository from "../repositories/PsicologoRepository";

class PsicologoService {
  getPsicologos(): Promise<Array<PsicologoInterface>> {
    return PsicologoRepository.getPsicologos();
  }

  getOnePsicologo(psicologoId: number): Promise<any> {
    return PsicologoRepository.getOnePsicologo(psicologoId);
  }

  createPsicologo(dados: PsicologoInterface) {
    return PsicologoRepository.createPsicologo(dados);
  }

  updatePsicologo(
    psicologoId: number,
    dados: PsicologoInterface
  ): Promise<Array<any>> {
    return PsicologoRepository.updatePsicologo(psicologoId, dados);
  }

  deletePsicologo(psicologoId: number): Promise<any> {
    return PsicologoRepository.deletePsicologo(psicologoId);
  }
}

export default new PsicologoService();
