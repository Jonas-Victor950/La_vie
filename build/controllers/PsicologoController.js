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
const messages_1 = __importDefault(require("../constants/messages"));
const PsicologoService_1 = __importDefault(require("../services/PsicologoService"));
const logger_1 = __importDefault(require("../database/logger"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class PsicologoController {
    static allPsicologos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const psicologos = yield PsicologoService_1.default.getPsicologos();
                if (psicologos.length <= 0) {
                    logger_1.default.info(messages_1.default.ERROR.PSICOLOGOS.NONE_PSICOLOGO_UNTIL_NOW);
                    return res
                        .status(200)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PSICOLOGOS.NONE_PSICOLOGO_UNTIL_NOW,
                    });
                }
                else {
                    logger_1.default.info(messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_FIND);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_FIND,
                        data: psicologos,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const psicologoId = parseInt(req.params.id);
                const psicologo = yield PsicologoService_1.default.getOnePsicologo(psicologoId);
                if (!psicologo) {
                    logger_1.default.error(messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
                    });
                }
                else {
                    logger_1.default.info("Mandando o psicologo que foi pedido!");
                    return res.json({ success: true, data: psicologo });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, apresentacao } = req.body;
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            const psicologoObj = {
                nome: nome,
                email: email,
                senha: newSenha,
                apresentacao: apresentacao,
            };
            try {
                const psicologo = yield PsicologoService_1.default.createPsicologo(psicologoObj);
                logger_1.default.info(messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_CREATE);
                return res
                    .status(200)
                    .json({
                    success: true,
                    msg: messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_CREATE,
                    data: psicologo,
                });
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, apresentacao } = req.body;
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            const psicologoObj = {
                nome: nome,
                email: email,
                senha: newSenha,
                apresentacao: apresentacao,
            };
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const psicologoId = parseInt(req.params.id);
                const psicologo = yield PsicologoService_1.default.getOnePsicologo(psicologoId);
                if (!psicologo) {
                    logger_1.default.error(messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
                    });
                }
                else {
                    const updatedPsicologo = yield PsicologoService_1.default.updatePsicologo(psicologoId, psicologoObj);
                    logger_1.default.info(messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_UPDATE);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_UPDATE,
                        data: psicologoObj,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const psicologoId = parseInt(req.params.id);
                const psicologo = yield PsicologoService_1.default.getOnePsicologo(psicologoId);
                if (!psicologo) {
                    logger_1.default.error(messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
                    });
                }
                else {
                    yield PsicologoService_1.default.deletePsicologo(psicologoId);
                    logger_1.default.info(messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_DELETE);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PSICOLOGOS.PSICOLOGOS_DELETE,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
}
exports.default = PsicologoController;
