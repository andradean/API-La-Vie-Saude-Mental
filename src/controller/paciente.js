const { where } = require("sequelize");
const paciente = require("../models/pacientes");

const pacienteController = {
  listAllpaciente: async (req, res) => {
    try {
      const pacientes = await paciente.findAll();

      return res.status(200).json(pacientes);
    } catch (error) {
      res.status(400);
    }
  },
  listOnepaciente: async (req, res) => {
    try {
      const { id } = req.params;
      const onePaciente = await paciente.findByPk(id);

      if (!onePaciente) {
        return res.status(404).send("paciente não encontrado!");
      } else {
        return res.status(200).json(onePaciente);
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
  postPaciente: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;
      const novoPaciente = await paciente.create({
        nome,
        email,
        idade,
      });

      return res.status(200).json(novoPaciente);
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
  putPaciente: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;
      const pacienteAtualizar = await paciente.update(
        {
          nome,
          email,
          idade,
        },
        {
          where: {
            id,
          },
        }
      );

      if (!pacienteAtualizar) {
        return res.status(404).send("paciente não encontrado!");
      } else {
        return res.status(200).send("paciente atualizado");
      }
    } catch (error) {
      console.error(error);
    }
  },
  delPaciente: async (req, res) => {
    try {
      const { id } = req.params;
      const removerPaciete = await paciente.destroy({
        where: {
          id,
        },
      });

      if (!removerPaciete) {
        return res.status(404).send("paciente não encontrado!");
      } else {
        return res.status(200).json("paciente removido!");
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
};

module.exports = pacienteController;
