import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import ForbiddenError from "../models/errors/forbidden.error.model";
import UserRepository from "../repositories/user_repository";


async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credential was not informed');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Authentication type invalid');
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');

            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Invalid Token');
            }

            const user = { uuid: tokenPayload.sub, username: tokenPayload.username };
            req.user = user;
            next();
        } catch (error) {
            throw new ForbiddenError('Invalid Token');
        }
    } catch (error) {
        next(error)
    }
}

export default jwtAuthenticationMiddleware;