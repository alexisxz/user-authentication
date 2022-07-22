import express, { NextFunction, Request, Response } from "express";
import bearerAuthenticationMiddleware from "./middlewares/bearer-authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(statusRoute);
app.use(bearerAuthenticationMiddleware, usersRoute);
app.use(authorizationRoute);

// configuraç~~ao dos Handlers de Erro
app.use(errorHandler);

// inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});