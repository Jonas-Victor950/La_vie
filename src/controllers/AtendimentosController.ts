import { AtendimentoInterface } from "./../interfaces/AtendimentoInterface";
import Logger from "../database/logger";
import MESSAGE from "../constants/messages";
import { Request, Response, NextFunction } from "express";
import { Psicologo, Paciente, Atendimento } from "../models/Index";
import AtendimentoRepository from "../repositories/AtendimentoRepository";

class AtendimentoController {
  static async allAtendimentos(req: Request, res: Response) {
    try {
      const atendimentos: Array<AtendimentoInterface> =
        await AtendimentoRepository.getAtendimentos();

      if (atendimentos.length <= 0) {
        Logger.info(MESSAGE.ERROR.ATENDIMENTOS.NONE_ATENDIMENTO_UNTIL_NOW);
        return res.status(200).json({
          success: false,
          msg: MESSAGE.ERROR.ATENDIMENTOS.NONE_ATENDIMENTO_UNTIL_NOW,
        });
      } else {
        Logger.info(MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_FIND);
        return res.status(200).json({
          success: true,
          msg: MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_FIND,
          data: atendimentos,
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

      const atendimentoId: number = parseInt(req.params.id);
      const atendimento = await AtendimentoRepository.getOneAtendimento(
        atendimentoId
      );

      if (!atendimento) {
        Logger.error(MESSAGE.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND);
        return res.status(500).json({
          success: false,
          msg: MESSAGE.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND,
        });
      } else {
        Logger.info("Mandando o atendimento que foi pedido!");
        return res.json({ success: true, data: atendimento });
      }
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async create(req: any, res: Response) {
    const { paciente_id, data_atendimento, observacoes } = req.body;
    const login_id = req.auth.psicologo_id;
    const atendimentoObj: AtendimentoInterface = {
      psicologo_id: login_id,
      paciente_id: paciente_id,
      data_atendimento: data_atendimento,
      observacoes: observacoes,
    };
    try {
      const atendimento = await AtendimentoRepository.createAtendimento(
        atendimentoObj
      );

      Logger.info(MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_CREATE);
      return res.status(201).json({
        success: true,
        msg: MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_CREATE,
        data: atendimento,
      });
    } catch (error) {
      Logger.error(error);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async update(req: any, res: Response) {
    const { paciente_id, data_atendimento, observacoes } = req.body;
    const login_id = req.auth.psicologo_id;
    const atendimentoObj: AtendimentoInterface = {
      psicologo_id: login_id,
      paciente_id: paciente_id,
      data_atendimento: data_atendimento,
      observacoes: observacoes,
    };

    try {
      if (!req.params.id || isNaN(parseInt(req.params.id))) {
        Logger.error(MESSAGE.ERROR.NOT_VALID_ID);
        return res
          .status(500)
          .json({ success: false, msg: MESSAGE.ERROR.NOT_VALID_ID });
      }

      const atendimentoId: number = parseInt(req.params.id);
      const atendimento = await AtendimentoRepository.getOneAtendimento(
        atendimentoId
      );

      if (!atendimento) {
        Logger.error(MESSAGE.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND);
        return res.status(500).json({
          success: false,
          msg: MESSAGE.ERROR.ATENDIMENTOS.ATENDIMENTO_NOT_FOUND,
        });
      } else {
        const updatedAtendimento = await AtendimentoRepository.updateAtendimento(
          atendimentoId,
          atendimentoObj
        );
        Logger.info(MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_UPDATE);
        return res
          .status(200)
          .json({
            success: true,
            msg: MESSAGE.SUCCESS.ATENDIMENTOS.ATENDIMENTOS_UPDATE,
            data: atendimentoObj,
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

export default AtendimentoController;
