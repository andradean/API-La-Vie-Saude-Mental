//execução do servidor
const express = require("express");
const { hasConection } = require("./database/index");
const routes = require("./routes/index");
const handleError = require("./middlewares/handleError");
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt")

const server = express();

hasConection();

server.use(express.json());
server.use(jwtMiddleware.unless({path: ["/", "/login", "/psicologos"]}));
server.use(authMiddleware);
server.use(routes);

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));
