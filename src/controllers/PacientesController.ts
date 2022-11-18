import MESSAGE from "../constants/messages";
import { Request, Response, NextFunction} from "express";
import { PacienteInterface } from "../interfaces/PacienteInterface";
import PacienteService from "../services/PacienteService";
import Logger from "../database/logger";
import bcrypty from "bcryptjs";

class PacienteController {
    static async allPacientes (req: Request, res: Response) {

        try{
            const pacientes: Array<PacienteInterface> = await PacienteService.getPacientes();

            if (pacientes.length <= 0) {
                Logger.info(MESSAGE.ERROR.PACIENTES.NONE_PACIENTE_UNTIL_NOW);
                return res
                    .status( 200)
                    .json({success: false, msg: MESSAGE.ERROR.PACIENTES.NONE_PACIENTE_UNTIL_NOW});
            } else {
                Logger.info(MESSAGE.SUCCESS.PACIENTES.PACIENTES_FIND);
                return res
                    .status(200)
                    .json({success: true, msg: MESSAGE.SUCCESS.PACIENTES.PACIENTES_FIND, data: pacientes});
            };
        } catch (error: any) {
            Logger.error(`Pane no sistema: ${error.message}`);
            return res  
                .status(500)
                .json({success: false, msg: MESSAGE.ERROR.ERROR_CATCH})
        }
    }

    static async getOne (req: Request, res: Response) {
        try {
            if (!req.params.id || isNaN(parseInt(req.params.id))) {
                Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
                return res
                    .status(500)
                    .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
            }

            const pacienteId: number = parseInt(req.params.id);
            const paciente = await PacienteService.getOnePaciente(pacienteId);

            if (!paciente) {
                Logger.error(MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND });
            } else {
                Logger.info("Mandando o paciente que foi pedido!");
                return res.json({ success: true, data: paciente })
            }
        } catch (error) {
            Logger.error(error);
            return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
        }
    }

    static async create (req: Request, res: Response) {
        const { nome, email, idade } = req.body;
        const pacienteObj: PacienteInterface = {
            nome: nome,
            email: email,
            idade: idade
        };

        try {
            const paciente = await PacienteService.createPaciente(pacienteObj);

            Logger.info(MESSAGE.SUCCESS.PACIENTES.PACIENTES_CREATE);
            return res
                .status(200)
                .json({ success: true, msg: MESSAGE.SUCCESS.PACIENTES.PACIENTES_CREATE, data: paciente });

        } catch (error) {
            Logger.error(error)
            return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH}); 
        }
    }

    static async update (req: Request, res: Response) {
        const { nome, email, idade } = req.body;
        const pacienteObj: PacienteInterface = {
            nome: nome,
            email: email,
            idade: idade
        };

        try {
            if (!req.params.id || isNaN(parseInt(req.params.id))) {
                Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
                return res
                    .status(500)
                    .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
            }

            const pacienteId: number = parseInt(req.params.id);
            const paciente = await PacienteService.getOnePaciente(pacienteId);

            if (!paciente) {
                Logger.error(MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                return res
                .status(500)
                .json({ success: false, msg:MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND});
            } else {
                const updatedPaciente = await PacienteService.updatePaciente(pacienteId, pacienteObj);

                Logger.info(MESSAGE.SUCCESS.PACIENTES.PACIENTES_UPDATE);
                return res.status(200).json({ success: true, msg: MESSAGE.SUCCESS.PACIENTES.PACIENTES_UPDATE, data: pacienteObj });
            }
        } catch (error) {
            Logger.error(error);
            return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
        }
    }

    static async delete (req: Request, res: Response) {
        try {
            if (!req.params.id || isNaN(parseInt(req.params.id))) {
                Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
                return res
                    .status(500)
                    .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
            }

            const pacienteId: number = parseInt(req.params.id);
            const paciente = await PacienteService.getOnePaciente(pacienteId);

            if (!paciente) {
                Logger.error(MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND);
                return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.PACIENTES.PACIENTE_NOT_FOUND });
            } else {
            await PacienteService.deletePaciente(pacienteId);

            Logger.info(MESSAGE.SUCCESS.PACIENTES.PACIENTES_DELETE);
            return res.status(200).json({ success: true, msg: MESSAGE.SUCCESS.PACIENTES.PACIENTES_DELETE });
            }
        } catch (error) {
            Logger.error(error);
            return res
                .status(500)
                .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
        }
    }
}

export default PacienteController