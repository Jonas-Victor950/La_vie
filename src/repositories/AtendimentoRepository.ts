import { AtendimentoInterface } from "../interfaces/AtendimentoInterface";
import { Atendimento, Psicologo, Paciente } from "../models/Index";

class AtendimentoRepository {
  getAtendimentos(): Promise<Array<any>> {
    return Atendimento.findAll({
      include: [
        { model: Psicologo, attributes: ["psicologo_id", "nome", "email"] },
        { model: Paciente },
      ],
    });
  }

  getOneAtendimento(atendimentoId: number): Promise<any | null> {
    return Atendimento.findOne({
      where: {
        atendimento_id: atendimentoId,
      },
    });
  }

  createAtendimento(dados: AtendimentoInterface): Promise<any> {
    return Atendimento.create({
      psicologo_id: dados.psicologo_id,
      paciente_id: dados.paciente_id,
      data_atendimento: dados.data_atendimento,
      observacoes: dados.observacoes,
    });
  }
}

export default new AtendimentoRepository();
