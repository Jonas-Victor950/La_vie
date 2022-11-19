import { validate, Joi } from "express-validation";

const ValidateLogin = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
}),
});

export default ValidateLogin