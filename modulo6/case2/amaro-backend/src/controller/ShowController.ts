import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { IShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public newshow = async (req: Request, res: Response) => {
        try {
            const input: IShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                date: req.body.date
            }

            const response = await this.showBusiness.newshow(input)
            res.status(201).send(response)

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}