"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validateCreatePaciente = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        nome: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        idade: express_validation_1.Joi.string().required(),
    }),
});
exports.default = validateCreatePaciente;
