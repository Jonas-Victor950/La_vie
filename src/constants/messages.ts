const MESSAGE = {
  ERROR: {
    PSICOLOGOS: {
      PSICOLOGO_NOT_FOUND: "✖️ Psicologo não encontrado!",
      NONE_PSICOLOGO_UNTIL_NOW: "⚠️ Nenhum psicólogo até o momento.",
    },
    PACIENTES: {
      PACIENTE_NOT_FOUND: "✖️ Paciente não encontrado!",
      NONE_PACIENTE_UNTIL_NOW: "⚠️ Nenhum paciente até o momento.",
    },
    ATENDIMENTOS: {
      ATENDIMENTO_NOT_FOUND: "✖️ Atendimento não encontrado!",
      NONE_ATENDIMENTO_UNTIL_NOW: "⚠️ Nenhum atendimento até o momento.",
    },
    ERROR_CATCH: "✖️ Ops, deu ruim!",
    NOT_VALID_ID: "✖️ Eita! Informe um ID válido!",
    CONSTRAINT: "Existe relacionamento com esse id, não é possivel deletar",
    EMAIL: "Email não cadastrado!",
    PASSWORD: "Senha invalida!",
    CREATE_FAIL: "Houve um problema na requisição, verifique o paciente_id",
  },
  SUCCESS: {
    PSICOLOGOS: {
      PSICOLOGOS_FIND: "✔️ Psicólogo(s) encontrados com sucesso!",
      PSICOLOGOS_DELETE: "✔️ Psicólogo excluído com sucesso!",
      PSICOLOGOS_UPDATE: "✔️ Psicólgo atualizado com sucesso!",
      PSICOLOGOS_CREATE: "✔️ Psicologo criado com sucesso!",
    },
    PACIENTES: {
      PACIENTES_FIND: "✔️ Paciente(s) encontrados com sucesso!",
      PACIENTES_DELETE: "✔️ Paciente excluído com sucesso!",
      PACIENTES_UPDATE: "✔️ Paciente atualizado com sucesso!",
      PACIENTES_CREATE: "✔️ Paciente criado com sucesso!",
    },
    ATENDIMENTOS: {
      ATENDIMENTOS_CREATE: "✔️ Atendimento criado com sucesso!",
      ATENDIMENTOS_FIND: "✔️ Atendimento(s) encontrados com sucesso!",
    },
    SERVER: "Servidor rodando na porta 3000",
    DB: "Banco dados conectado!",
    QTDPACIENTES: "Número de pacientes: ",
    QTDPSICOLOGOS: "Número de psicólogos: ",
    QTDATENDIMENTOS: "Número de atendimentos: ",
    MEDIA: "Nossa média de atendimentos por psicologos é: ",
  },
};

export default MESSAGE;
