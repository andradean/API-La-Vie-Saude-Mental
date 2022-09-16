const atendimentos = require("../models/atendimentos")

const atendimentoController = {
 
  listAllatendimento: async (req, res) => {
    try {
      const listAtendimento = await atendimentos.findAll();

      return res.status(200).json(listAtendimento);
    } catch (error) {
      res.status(400);
    }
  },

  listOneatendimento: async (req, res) => {
    try {
      const { id } = req.params;
      const oneAtendimento = await atendimentos.findByPk(id);

      if (!oneAtendimento) {
        return res.status(404).send("paciente não encontrado!");
      } else {
        return res.status(200).json(oneAtendimento);
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send("bad request!");
    }
  },
  
  postAtendimento: async (req, res) => {
    try {
    const {data_atendimento, observacao, pacientes_id, psicologos_id } = req.body;
    const novoAtendimento = await atendimentos.create({
      data_atendimento,
      observacao,
      pacientes_id,
      psicologos_id
    });

    return res.status(200).json(novoAtendimento);
  } catch (error) {
    console.error(error);
    return res.status(400).send("bad request!");}},
 
}

module.exports = atendimentoController