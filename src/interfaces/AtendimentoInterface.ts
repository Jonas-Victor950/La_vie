export interface AtendimentoInterface {
  atendimento_id?: number;
  paciente_id: number;
  psicologo_id: number;
  data_atendimento: Date;
  observacoes: string;
  created_at?: Date;
  updated_at?: Date;
}
