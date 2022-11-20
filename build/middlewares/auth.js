"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const default_1 = __importDefault(require("../database/default"));
const auth = (0, express_jwt_1.expressjwt)({
    secret: default_1.default.key,
    algorithms: ["HS256"],
});
exports.default = auth;
