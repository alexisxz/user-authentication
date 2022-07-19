import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(usersRoute);
app.use(statusRoute)

// inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});