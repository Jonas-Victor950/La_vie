import { Request, Response } from "express";
import DashboardRepository from "../repositories/DashboardRepository";
import MESSAGE from "../constants/messages";
import Logger from "../database/logger";

class DashboardController {
  static async countPacientes(req: Request, res: Response) {
    try {
      const pacientes = await DashboardRepository.countPacientes();

      Logger.info(MESSAGE.SUCCESS.QTDPACIENTES + pacientes);
      return res.status(200).json(MESSAGE.SUCCESS.QTDPACIENTES + pacientes);
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async countPsicologos(req: Request, res: Response) {
    try {
      const psicologos = await DashboardRepository.countPsicologos();

      Logger.info(MESSAGE.SUCCESS.QTDPSICOLOGOS + psicologos);
      return res.status(200).json(MESSAGE.SUCCESS.QTDPSICOLOGOS + psicologos);
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async countAtendimentos(req: Request, res: Response) {
    try {
      const atendimentos = await DashboardRepository.countAtendimentos();

      Logger.info(MESSAGE.SUCCESS.QTDATENDIMENTOS + atendimentos);
      return res
        .status(200)
        .json(MESSAGE.SUCCESS.QTDATENDIMENTOS + atendimentos);
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }

  static async averageAtendimentos(req: Request, res: Response) {
    try {
      const atendimentos = await DashboardRepository.countAtendimentos();
      const psicologos = await DashboardRepository.countPsicologos();

      Logger.info(
        MESSAGE.SUCCESS.MEDIA + (atendimentos / psicologos).toFixed(2)
      );
      return res
        .status(200)
        .json(MESSAGE.SUCCESS.MEDIA + (atendimentos / psicologos).toFixed(2));
    } catch (error: any) {
      Logger.error(`Pane no sistema: ${error.message}`);
      return res
        .status(500)
        .json({ success: false, msg: MESSAGE.ERROR.ERROR_CATCH });
    }
  }
}

export default DashboardController;
