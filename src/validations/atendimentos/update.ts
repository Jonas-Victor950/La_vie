import { validate, Joi } from "express-validation";

const validateUpdateAtendimento = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    paciente_id: Joi.required(),
    observacoes: Joi.string().required(),
    data_atendimento: Joi.date().required(),
  }),
});

export default validateUpdateAtendimento;
