"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validateCreatePsicologo = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        senha: express_validation_1.Joi.string().min(6).required(),
        apresentacao: express_validation_1.Joi.string().required(),
    }),
});
exports.default = validateCreatePsicologo;
