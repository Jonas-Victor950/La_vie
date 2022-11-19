import { Psicologo } from "../models/Index";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authDB from "../database/default";
import bcrypt from "bcryptjs";
import MESSAGE from "../constants/messages";

const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      const psicologo = await Psicologo.findOne({
        where: {
          email,
        },
      });

      if (!psicologo) {
        return res.status(401).json(MESSAGE.ERROR.EMAIL);
      }

      if (!bcrypt.compareSync(senha, psicologo.senha)) {
        return res.status(401).json(MESSAGE.ERROR.PASSWORD);
      }

      const token = jwt.sign(
        {
          psicologo_id: psicologo.psicologo_id,
          nome: psicologo.nome,
          email: psicologo.email,
          userType: "user",
        },
        authDB.key
      );

      return res.json(token);
    } catch (error) {
      return res.status(200);
    }
  },
};

export default AuthController;
