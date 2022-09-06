import { Request, Response } from "express";
import { container } from "tsyringe";
import IncrementUserLevelService from "../../../services/IncrementUserLevelService";

export default class IncrementUserLevelController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { id, xpByIncrement } = req.body;

        const incrementUserLevel = container.resolve(IncrementUserLevelService);

        const user = await incrementUserLevel.execute({ id, xpByIncrement });

        return res.json(user);
    }
}