import { validate, Joi } from "express-validation";

const validateCreateAtendimento = validate({
  body: Joi.object({
    paciente_id: Joi.required(),
    observacoes: Joi.string().required(),
    data_atendimento: Joi.date().required(),
  }),
});

export default validateCreateAtendimento;
