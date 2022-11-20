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
const DashboardRepository_1 = __importDefault(require("../repositories/DashboardRepository"));
const messages_1 = __importDefault(require("../constants/messages"));
const logger_1 = __importDefault(require("../database/logger"));
class DashboardController {
    static countPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield DashboardRepository_1.default.countPacientes();
                logger_1.default.info(messages_1.default.SUCCESS.QTDPACIENTES + pacientes);
                return res.status(200).json(messages_1.default.SUCCESS.QTDPACIENTES + pacientes);
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static countPsicologos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const psicologos = yield DashboardRepository_1.default.countPsicologos();
                logger_1.default.info(messages_1.default.SUCCESS.QTDPSICOLOGOS + psicologos);
                return res.status(200).json(messages_1.default.SUCCESS.QTDPSICOLOGOS + psicologos);
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static countAtendimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atendimentos = yield DashboardRepository_1.default.countAtendimentos();
                logger_1.default.info(messages_1.default.SUCCESS.QTDATENDIMENTOS + atendimentos);
                return res
                    .status(200)
                    .json(messages_1.default.SUCCESS.QTDATENDIMENTOS + atendimentos);
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static averageAtendimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atendimentos = yield DashboardRepository_1.default.countAtendimentos();
                const psicologos = yield DashboardRepository_1.default.countPsicologos();
                logger_1.default.info(messages_1.default.SUCCESS.MEDIA + (atendimentos / psicologos).toFixed(2));
                return res
                    .status(200)
                    .json(messages_1.default.SUCCESS.MEDIA + (atendimentos / psicologos).toFixed(2));
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
}
exports.default = DashboardController;
