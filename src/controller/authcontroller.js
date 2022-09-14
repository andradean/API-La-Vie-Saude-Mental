const { where } = require("sequelize");
const { psicologo } = require("../models");
const bcrypt = require("bcryptjs");
const secret = require("../configs/secret");
const jwt = require("jsonwebtoken");

const authController = {
  Login: async (req, res) =>{
    const {email, senha} = req.body;
    const psicologo = await psicologo.findOne({
      where: {email: email},
    })

    if (!psicologo) {
      return res.status(400).json({error: "Email já cadastrado"});
    }

    if (!bcrypt.compareSync(senha, psicologo.senha)){
      return res.status(400).json({error: "Senha incorreta"});
    }

    const user = {
      id: psicologo.id,
      nome: psicologo.nome,
      email: psicologo.email,
    };

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  }
  };

  module.exports = authController;