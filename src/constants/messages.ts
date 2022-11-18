const MESSAGE = {
  ERROR: {
    PSICOLOGOS: {
        PSICOLOGO_NOT_FOUND: "✖️ Psicologo não encontrado!",
        NONE_PSICOLOGO_UNTIL_NOW: "⚠️ Nenhum psicólogo até o momento."
    },
    ERROR_CATCH: "✖️ Ops, deu ruim!",
    NOT_VALID_ID: "✖️ Eita! Informe um ID válido!",
    CONSTRAINT: "Existe relacionamento com esse id, não é possivel deletar",
    EMAIL: "Email não cadastrado!",
    PASSWORD: "Senha invalida!",
    CREATE_FAIL: "Houve um problema na requisição, verifique o paciente_id"
  },
  SUCCESS: {
    PSICOLOGOS: {
        PSICOLOGOS_FIND: "✔️ Psicólogos encontrados com sucesso!",
        PSICOLOGOS_DELETE: "✔️ Psicólogo excluído com sucesso!",
        PSICOLOGOS_UPDATE:"✔️ Psicólgo atualizado com sucesso!",
        PSICOLOGOS_CREATE: "✔️ Psicologo criado com sucesso!"
    }
  }
};

export default MESSAGE;
