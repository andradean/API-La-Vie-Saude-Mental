const atendimentos = require("./atendimentos");
const paciente = require("./pacientes");
const psicologo = require("./psicologos");

atendimentos.belongsTo(paciente, { foreignKey: "pacientes_id" });
atendimentos.belongsTo(psicologo, { foreignKey: "psicologos_id" });

module.exports = {
  atendimentos,
  paciente,
  psicologo,
};
