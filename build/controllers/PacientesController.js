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
const PacienteService_1 = __importDefault(require("../services/PacienteService"));
const logger_1 = __importDefault(require("../database/logger"));
class PacienteController {
    static allPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield PacienteService_1.default.getPacientes();
                if (pacientes.length <= 0) {
                    logger_1.default.info(messages_1.default.ERROR.PACIENTES.NONE_PACIENTE_UNTIL_NOW);
                    return res
                        .status(200)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PACIENTES.NONE_PACIENTE_UNTIL_NOW,
                    });
                }
                else {
                    logger_1.default.info(messages_1.default.SUCCESS.PACIENTES.PACIENTES_FIND);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PACIENTES.PACIENTES_FIND,
                        data: pacientes,
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
                const pacienteId = parseInt(req.params.id);
                const paciente = yield PacienteService_1.default.getOnePaciente(pacienteId);
                if (!paciente) {
                    logger_1.default.error(messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND,
                    });
                }
                else {
                    logger_1.default.info("Mandando o paciente que foi pedido!");
                    return res.json({ success: true, data: paciente });
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
            const { nome, email, idade } = req.body;
            const pacienteObj = {
                nome: nome,
                email: email,
                idade: idade,
            };
            try {
                const paciente = yield PacienteService_1.default.createPaciente(pacienteObj);
                logger_1.default.info(messages_1.default.SUCCESS.PACIENTES.PACIENTES_CREATE);
                return res
                    .status(200)
                    .json({
                    success: true,
                    msg: messages_1.default.SUCCESS.PACIENTES.PACIENTES_CREATE,
                    data: paciente,
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
            const { nome, email, idade } = req.body;
            const pacienteObj = {
                nome: nome,
                email: email,
                idade: idade,
            };
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const pacienteId = parseInt(req.params.id);
                const paciente = yield PacienteService_1.default.getOnePaciente(pacienteId);
                if (!paciente) {
                    logger_1.default.error(messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND,
                    });
                }
                else {
                    const updatedPaciente = yield PacienteService_1.default.updatePaciente(pacienteId, pacienteObj);
                    logger_1.default.info(messages_1.default.SUCCESS.PACIENTES.PACIENTES_UPDATE);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PACIENTES.PACIENTES_UPDATE,
                        data: pacienteObj,
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
                const pacienteId = parseInt(req.params.id);
                const paciente = yield PacienteService_1.default.getOnePaciente(pacienteId);
                if (!paciente) {
                    logger_1.default.error(messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                    return res
                        .status(500)
                        .json({
                        success: false,
                        msg: messages_1.default.ERROR.PACIENTES.PACIENTE_NOT_FOUND,
                    });
                }
                else {
                    yield PacienteService_1.default.deletePaciente(pacienteId);
                    logger_1.default.info(messages_1.default.SUCCESS.PACIENTES.PACIENTES_DELETE);
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: messages_1.default.SUCCESS.PACIENTES.PACIENTES_DELETE,
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
exports.default = PacienteController;
