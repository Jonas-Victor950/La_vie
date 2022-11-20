"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validateParamId = (0, express_validation_1.validate)({
    params: express_validation_1.Joi.object({
        id: express_validation_1.Joi.number().required(),
    }),
});
exports.default = validateParamId;
