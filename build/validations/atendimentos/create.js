"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validateCreateAtendimento = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        paciente_id: express_validation_1.Joi.required(),
        observacoes: express_validation_1.Joi.string().required(),
        data_atendimento: express_validation_1.Joi.date().required(),
    }),
});
exports.default = validateCreateAtendimento;
