import MESSAGE from "../constants/messages";
import { Request, Response, NextFunction} from "express";
import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import PsicologoService from "../services/PsicologoService";
import Logger from "../database/logger";

class PsicologoController {
    static async allPsicologos (req: Request, res: Response) {

        try{
            const psicologos: Array<PsicologoInterface> = await PsicologoService.getPsicologos();

            if (psicologos.length <= 0) {
                Logger.info("⚠️ Nenhum psicólogo até o momento.");
                return res
                    .status( 500)
                    .json({success: false, msg: "⚠️ Nenhum psicólogo até o momento."});
            } else {
                Logger.info("✔️ Psicólogos encontrados com sucesso!");
                return res
                    .status(200)
                    .json({success: true, msg: "✔️ Psicólogos encontrados com sucesso!", data: psicologos});
            };
        } catch (error: any) {
            Logger.error(`Pane no sistema: ${error.message}`);
            return res  
                .status(500)
                .json({success: false, msg: MESSAGE.ERROR.ERROR_CATCH})
        }
    }
}

export default PsicologoController;