import { validate, Joi } from "express-validation";

const validateCreatePaciente = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    idade: Joi.string().required(),
  }),
});

export default validateCreatePaciente;
