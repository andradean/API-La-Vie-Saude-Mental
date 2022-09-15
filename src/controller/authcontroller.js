const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcrypt");
const { psicologo } = require("../models/index");
const login = require("../validations/auth/login");

const authController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const user = await psicologo.findOne({
      where: { email: email },
    });
    if (!bcrypt.compareSync(senha, user.senha)) {
      return res.status(401).json("senha incorreta");
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        nome: user.nome,
      },
      secret.key
    );
    return res.status(200).json(token);
  },
};

module.exports = authController;
