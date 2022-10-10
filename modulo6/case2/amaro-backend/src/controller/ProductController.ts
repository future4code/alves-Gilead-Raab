import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IAddProductsInputDTO, Product } from "../models/Products";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public addProduct = async (req: Request, res: Response) => {
        try {
            const inputProducts: IAddProductsInputDTO[] = req.body.products

            const response = await this.productBusiness.addProduct(inputProducts)

            res.status(201).send(response)

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}