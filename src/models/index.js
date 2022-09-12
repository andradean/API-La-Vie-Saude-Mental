const atendimentos = require("./atendimentos");
const pacientes = require("./pacientes");
const psicologos = require("./psicologos");

atendimentos.belongsTo(pacientes, {foreignKey: 'pacientes_id'});
atendimentos.belongsTo(psicologos, {foreignKey: 'psicologos_id'});

module.exports = {
  atendimentos,
  pacientes,
  psicologos
};
