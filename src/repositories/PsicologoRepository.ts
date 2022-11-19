import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import { Psicologo } from "../models/Index";

class PsicologoRepository {
  getPsicologos(): Promise<Array<any>> {
    return Psicologo.findAll();
  }

  getOnePsicologo(psicologoId: number): Promise<any | null> {
    return Psicologo.findOne({
      where: {
        psicologo_id: psicologoId,
      },
    });
  }

  createPsicologo(dados: PsicologoInterface): Promise<any> {
    return Psicologo.create({
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      apresentacao: dados.apresentacao,
    });
  }

  updatePsicologo(
    psicologoId: number,
    dados: PsicologoInterface
  ): Promise<Array<any>> {
    return Psicologo.update(
      {
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
        apresentacao: dados.apresentacao,
      },
      {
        where: {
          psicologo_id: psicologoId,
        },
      }
    );
  }

  deletePsicologo(psicologoId: number): Promise<any> {
    return Psicologo.destroy({
      where: {
        psicologo_id: psicologoId,
      },
    });
  }
}

export default new PsicologoRepository();
