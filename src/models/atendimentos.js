const db = require("../database");
const { DataTypes } = require("sequelize");
const pacientes = require("./pacientes");
const psicologos = require("./psicologos")

const atendimentos = db.define(
  "atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    pacientes_id: {
        type: DataTypes.INTEGER,  
  },
  psicologos_id: {
    type: DataTypes.INTEGER,
  },
},
  {
    tableName: "psicologos",
  }
);

atendimentos.belongsTo(pacientes, {foreignKey: 'pacientes_id'});
atendimentos.belongsTo(psicologos, {foreignKey: 'psicologos_id'})

module.exports = psicologos;
