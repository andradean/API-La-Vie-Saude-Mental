const { where } = require("sequelize");
const psicologo = require("../models/psicologos");

const psicologoController = {
  listAll: async (req, res) => {
    const psicologos = await psicologo.findAll();

    return res.json(psicologos);
  },
  postPsicologo: async (req, res) => {
    const { nome, email, senha, aprentacao } = req.body;

    const novoPsicologo = await psicologo.create({
      nome,
      email,
      senha,
      aprentacao,
    });

    return res.json(novoPsicologo);
  },
  listOne: async (req, res) => {
    const { id } = req.params;
    const umPsicologo = await psicologo.findByPk(id);

    return res.json(umPsicologo);
  },
  putPsicologo: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, aprentacao } = req.body;

    const psicologoAtualizar = psicologo.update(
      {
        nome,
        email,
        senha,
        aprentacao,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.json(psicologoAtualizar);
  },
  delPsicologo: async (req, res) => {
    const { id } = req.params;
    await psicologo.destroy({
      where: {
        id,
      },
    });

    return res.json(204);
  },
};

module.exports = psicologoController;
