const db = require("../database");
const { DataTypes } = require("sequelize");
const pacientes = require("./pacientes");
const psicologos = require("./psicologos");

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
    pacientes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pacientes",
        key: "id",
      },
    },
    psicologos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "psicologos",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = atendimentos;
