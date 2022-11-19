import { Paciente, Psicologo, Atendimento } from "../models/Index";

class DashboardRepository {
  countPacientes(): Promise<any> {
    return Paciente.count();
  }

  countPsicologos(): Promise<any> {
    return Psicologo.count();
  }

  countAtendimentos(): Promise<any> {
    return Atendimento.count({
      include: [
        {
          model: Paciente,
        },
        {
          model: Psicologo,
        },
      ],
    });
  }
}

export default new DashboardRepository();
