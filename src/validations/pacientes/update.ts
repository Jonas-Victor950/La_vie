import { validate, Joi} from 'express-validation';

const validateUpdatePaciente = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        idade: Joi.string().required()
    })
})

export default validateUpdatePaciente