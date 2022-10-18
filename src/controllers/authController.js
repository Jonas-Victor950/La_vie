const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
//const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");

const AuthController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const psicologo = await Psicologos.findOne({
        where: {
          email,
        },
      });

      if (!psicologo) {
        return res.status(400).json("Email não cadastrado!");
      }

      if (!bcrypt.compareSync(senha, psicologo.senha)) {
        return res.status(401).json("Senha invalida!");
      }

      //const token = jwt.sign(
      // {
      //    psicologo: psicologo.psicologo_id,
      //    nome: psicologo.nome,
      //    email: psicologo.email,
      //    userType: 'user'
      //  },
      //secret.key
      //);

      return res.json("Logado");
    } catch (error) {}
  },
};

module.exports = AuthController;
