import { validate, Joi } from "express-validation";

const validateParamId = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
});

export default validateParamId;
