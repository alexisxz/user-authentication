import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user_repository"


async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credential was not informed');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Basic' || token) {
            throw new ForbiddenError('Authentication type invalid');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        const [username, password] = tokenContent.split(':');

        if (!username || !password) {
            throw new ForbiddenError('Credential not filled');
        }

        const user = await userRepository.findByUsernameAndPassword(username, password);

        if (!user) {
            throw new ForbiddenError('Username or passowrd invalid');
        }

        req.user = user;
        next();
    } catch (error) {
        next(error)
    }
}

export default basicAuthenticationMiddleware;