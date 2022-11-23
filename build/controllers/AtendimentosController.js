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
const logger_1 = __importDefault(require("../database/logger"));
const messages_1 = __importDefault(require("../constants/messages"));
const AtendimentoRepository_1 = __importDefault(require("../repositories/AtendimentoRepository"));
class AtendimentoController {
    static allAtendimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atendimentos = yield AtendimentoRepository_1.default.getAtendimentos();
                if (atendimentos.length <= 0) {
                    logger_1.default.info(messages_1.default.ERROR.ATENDIMENTOS.NONE_ATENDIMENTO_UNTIL_NOW);
                    return res.status(200).json({
                        success: false,
                        msg: messages_1.default.ERROR.ATENDIMENTOS.NONE_ATENDIMENTO_UNTIL_NOW,
                    });
                }
                else {
                    logger_1.default.info(messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_FIND);
                    return res.status(200).json({
                        success: true,
                        msg: messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_FIND,
                        data: atendimentos,
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
                const atendimentoId = parseInt(req.params.id);
                const atendimento = yield AtendimentoRepository_1.default.getOneAtendimento(atendimentoId);
                if (!atendimento) {
                    logger_1.default.error(messages_1.default.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND);
                    return res.status(500).json({
                        success: false,
                        msg: messages_1.default.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND,
                    });
                }
                else {
                    logger_1.default.info("Mandando o atendimento que foi pedido!");
                    return res.json({ success: true, data: atendimento });
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
            const { paciente_id, data_atendimento, observacoes } = req.body;
            const login_id = req.auth.psicologo_id;
            const atendimentoObj = {
                psicologo_id: login_id,
                paciente_id: paciente_id,
                data_atendimento: data_atendimento,
                observacoes: observacoes,
            };
            try {
                const atendimento = yield AtendimentoRepository_1.default.createAtendimento(atendimentoObj);
                logger_1.default.info(messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_CREATE);
                return res.status(201).json({
                    success: true,
                    msg: messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_CREATE,
                    data: atendimento,
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
            const { paciente_id, data_atendimento, observacoes } = req.body;
            const login_id = req.auth.psicologo_id;
            const atendimentoObj = {
                psicologo_id: login_id,
                paciente_id: paciente_id,
                data_atendimento: data_atendimento,
                observacoes: observacoes,
            };
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const atendimentoId = parseInt(req.params.id);
                const atendimento = yield AtendimentoRepository_1.default.getOneAtendimento(atendimentoId);
                if (!atendimento) {
                    logger_1.default.error(messages_1.default.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND);
                    return res.status(500).json({
                        success: false,
                        msg: messages_1.default.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND,
                    });
                }
                else {
                    const updatedAtendimento = yield AtendimentoRepository_1.default.updateAtendimento(atendimentoId, atendimentoObj);
                    logger_1.default.info(messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_UPDATE);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_UPDATE,
                        data: atendimentoObj,
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
exports.default = AtendimentoController;
