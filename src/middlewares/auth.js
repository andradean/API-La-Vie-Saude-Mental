const { psicologos } = require("../models");

module.exports = async (req, res, next) => {
  if (req.auth) {
    const psicologo = await psicologos.findByPk(req.auth.id);
    if (!psicologo) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Código inválido",
        },
      });
    }
  }

  next();
};