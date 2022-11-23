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

  updateAtendimento(
    atendimentoId: number,
    dados: AtendimentoInterface
  ): Promise<any> {
    return Atendimento.update(
      {
        psicologo_id: dados.psicologo_id,
        paciente_id: dados.paciente_id,
        data_atendimento: dados.data_atendimento,
        observacoes: dados.observacoes,
      },
      {
        where: {
          atendimento_id: atendimentoId,
        },
      }
    );
  }

  deleteAtendimento(atendimentoId: number): Promise<any> {
    return Atendimento.destroy({
      where: {
        atendimento_id: atendimentoId,
      },
    });
  }
}

export default new AtendimentoRepository();
