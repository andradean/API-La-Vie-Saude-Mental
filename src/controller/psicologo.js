const { where } = require("sequelize");
const { psicologo } = require("../models");

const psicologoController = {
  listAll: async (req, res) => {
    try {
      const psicologos = await psicologo.findAll();

      return res.status(200).json(psicologos);
    } catch (error) {
      console.log(error);
      res.status(400).json("erro, chame o suporte!");
    }
  },
  postPsicologo: async (req, res) => {
    try {
      const { nome, email, senha, aprentacao } = req.body;
      const novoPsicologo = await psicologo.create({
        nome,
        email,
        senha,
        aprentacao,
      });

      return res.status(200).json(novoPsicologo);
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
  listOne: async (req, res) => {
    try {
      const { id } = req.params;
      const onePsicologo = await psicologo.findByPk(id);

      if (!onePsicologo) {
        return res.status(404).send("psicologo não encontrado!");
      } else {
        return res.status(200).json(onePsicologo);
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
  putPsicologo: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, senha, aprentacao } = req.body;
      const psicologoAtualizar = await psicologo.update(
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

      if (!psicologoAtualizar) {
        return res.status(404).send("psicologo não encontrado!");
      } else {
        return res.status(200).send("psicologo atualizado");
      }
    } catch (error) {
      console.error(error);
    }
  },
  delPsicologo: async (req, res) => {
    try {
      const { id } = req.params;
      const removerPsicologo = await psicologo.destroy({
        where: {
          id,
        },
      });

      if (!removerPsicologo) {
        return res.status(404).send("psicologo não encontrado!");
      } else {
        return res.status(200).json("psicologo removido!");
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
};

module.exports = psicologoController;
