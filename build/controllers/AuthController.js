"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("../models/Index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const default_1 = __importDefault(require("../database/default"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const messages_1 = __importDefault(require("../constants/messages"));
const AuthController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, senha } = req.body;
                const psicologo = yield Index_1.Psicologo.findOne({
                    where: {
                        email,
                    },
                });
                if (!psicologo) {
                    return res.status(401).json(messages_1.default.ERROR.EMAIL);
                }
                if (!bcryptjs_1.default.compareSync(senha, psicologo.senha)) {
                    return res.status(401).json(messages_1.default.ERROR.PASSWORD);
                }
                const token = jsonwebtoken_1.default.sign({
                    psicologo_id: psicologo.psicologo_id,
                    nome: psicologo.nome,
                    email: psicologo.email,
                    userType: "user",
                }, default_1.default.key);
                return res.json(token);
            }
            catch (error) {
                return res.status(200);
            }
        });
    },
};
exports.default = AuthController;
