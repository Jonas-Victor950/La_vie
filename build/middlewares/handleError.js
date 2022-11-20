"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const express_validation_1 = require("express-validation");
const messages_1 = __importDefault(require("../constants/messages"));
function handleError(error, req, res, next) {
    if (error instanceof express_validation_1.ValidationError) {
        return res.status(error.statusCode).json(error);
    }
    if (error instanceof express_jwt_1.UnauthorizedError) {
        return res.status(error.status).json(error);
    }
    if (error.name === "SequelizeForeignKeyConstraintError") {
        if (error.parent.code === "ER_NO_REFERENCED_ROW_2") {
            return res.status(400).json(messages_1.default.ERROR.CREATE_FAIL);
        }
        return res.status(400).json(messages_1.default.ERROR.CONSTRAINT);
    }
    return res.status(500).json(error);
}
exports.default = handleError;
