//execução do servidor
const express = require("express");
const { hasConection } = require("./database/index");
const routes = require("./routes/index");

const server = express();

hasConection();

server.use(express.json());
server.use(routes);

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));
