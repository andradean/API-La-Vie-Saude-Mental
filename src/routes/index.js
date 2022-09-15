const express = require("express");
const routes = express.Router();
const psicologoController = require("../controller/psicologo");
const pacienteController = require("../controller/paciente");
const authValidation = require("../validations/auth/login");
const authController = require("../controller/authcontroller");
const authMiddlewares = require("../middlewares/auth");
const atendimentoController = require("../controller/atendimento");

//rotas psicologos
routes.get("/psicologo", psicologoController.listAll);
routes.get("/psicologo/:id", psicologoController.listOne);
routes.post("/psicologo", psicologoController.postPsicologo);
routes.put("/psicologo/:id", psicologoController.putPsicologo);
routes.delete("/psicologo/:id", psicologoController.delPsicologo);

//rotas paciente
routes.get("/paciente", pacienteController.listAllpaciente);
routes.get("/paciente/:id", pacienteController.listOnepaciente);
routes.post("/paciente", pacienteController.postPaciente);
routes.put("/paciente/:id", pacienteController.putPaciente);
routes.delete("/paciente/:id", pacienteController.delPaciente);

//rotas login
routes.post("/login", authValidation, authController.login);

//rotas atendimento
routes.get("/atendimentos", atendimentoController.listAllatendimento);
routes.get("/atendimentos/:id", atendimentoController.listOneatendimento); 
routes.post("/atendimento/criar", atendimentoController.postAtendimento);


module.exports = routes;
