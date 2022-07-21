import { User } from "../models/user_model";

declare module 'express-serve-static-core' {

    interface Request {
        user?: User
    }
}