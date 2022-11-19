import Atendimento from "./Atendimento";
import Psicologo from "./Psicologo";
import Paciente from "./Paciente";

Psicologo.hasMany(Atendimento, {
  foreignKey: "atendimento_id",
});
Atendimento.belongsTo(Psicologo, {
  foreignKey: "psicologo_id",
});

Paciente.hasMany(Atendimento, {
  foreignKey: "atendimento_id",
});
Atendimento.belongsTo(Paciente, {
  foreignKey: "paciente_id",
});

export { Atendimento, Psicologo, Paciente };
