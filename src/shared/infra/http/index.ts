import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';

import '../../typeorm';
import router from "./routes/index.routes";
import AppError from "../errors/AppError";

const port = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error',
        error: error.message
    });
});

app.use(router);

app.listen(port, () => console.log("Iniciado"));