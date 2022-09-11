const express = require("express");
const routes = express.Router();
const psicologoController = require("../controller/psicologo");

routes.get("/psicologo", psicologoController.listAll);
routes.get("/psicologo/:id", psicologoController.listOne);
routes.post("/psicologo", psicologoController.postPsicologo);
routes.put("/psicologo/:id", psicologoController.putPsicologo);
routes.delete("/psicologo/:id", psicologoController.delPsicologo);

module.exports = routes;
