import MESSAGE from "../constants/messages";
import { Request, Response, NextFunction } from "express";
import { PsicologoInterface } from "../interfaces/PsicologoInterface";
import PsicologoService from "../services/PsicologoService";
import Logger from "../database/logger";
import bcrypty from "bcryptjs";

class PsicologoController {
  static async allPsicologos(req: Request, res: Response) {
    try {
      const psicologos: Array<PsicologoInterface> =
        await PsicologoService.getPsicologos();

      if (psicologos.length <= 0) {
        Logger.info(MESSAGE.ERROR.PSICOLOGOS.NONE_PSICOLOGO_UNTIL_NOW);
        return res
          .status(200)
          .json({
            success: false,
            msg: MESSAGE.ERROR.PSICOLOGOS.NONE_PSICOLOGO_UNTIL_NOW,
          });
      } else {
        Logger.info(MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_FIND);
        return res
          .status(200)
          .json({
            success: true,
            msg: MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_FIND,
            data: psicologos,
          });
      }
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const psicologoId: number = parseInt(req.params.id);
      const psicologo = await PsicologoService.getOnePsicologo(psicologoId);

      if (!psicologo) {
        Logger.error(MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
        return res
          .status(500)
          .json({
            success: false,
            msg: MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
          });
      } else {
        Logger.info("Mandando o psicologo que foi pedido!");
        return res.json({ success: true, data: psicologo });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async create(req: Request, res: Response) {
    const { nome, email, senha, apresentacao } = req.body;
    const newSenha = bcrypty.hashSync(senha, 10);
    const psicologoObj: PsicologoInterface = {
      nome: nome,
      email: email,
      senha: newSenha,
      apresentacao: apresentacao,
    };

    try {
      const psicologo = await PsicologoService.createPsicologo(psicologoObj);

      Logger.info(MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_CREATE);
      return res
        .status(200)
        .json({
          success: true,
          msg: MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_CREATE,
          data: psicologo,
        });
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async update(req: Request, res: Response) {
    const { nome, email, senha, apresentacao } = req.body;
    const newSenha = bcrypty.hashSync(senha, 10);
    const psicologoObj: PsicologoInterface = {
      nome: nome,
      email: email,
      senha: newSenha,
      apresentacao: apresentacao,
    };

    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const psicologoId: number = parseInt(req.params.id);
      const psicologo = await PsicologoService.getOnePsicologo(psicologoId);

      if (!psicologo) {
        Logger.error(MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
        return res
          .status(500)
          .json({
            success: false,
            msg: MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
          });
      } else {
        const updatedPsicologo = await PsicologoService.updatePsicologo(
          psicologoId,
          psicologoObj
        );

        Logger.info(MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_UPDATE);
        return res
          .status(200)
          .json({
            success: true,
            msg: MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_UPDATE,
            data: psicologoObj,
          });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const psicologoId: number = parseInt(req.params.id);
      const psicologo = await PsicologoService.getOnePsicologo(psicologoId);

      if (!psicologo) {
        Logger.error(MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND);
        return res
          .status(500)
          .json({
            success: false,
            msg: MESSAGE.ERROR.PSICOLOGOS.PSICOLOGO_NOT_FOUND,
          });
      } else {
        await PsicologoService.deletePsicologo(psicologoId);

        Logger.info(MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_DELETE);
        return res
          .status(200)
          .json({
            success: true,
            msg: MESSAGE.SUCCESS.PSICOLOGOS.PSICOLOGOS_DELETE,
          });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }
}

export default PsicologoController;
