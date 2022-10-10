import { ProductDatabase } from "../database/ProductDatabase"
import { IAddProductsInputDTO, Product } from "../models/Products"


export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
    ) {}

    public addProduct = async (products: IAddProductsInputDTO[]) => {
        for (const item of products) {
            const product = new Product(
                item.id,
                item.name,
                item.tags
            )

            await this.productDatabase.addProduct(product)
        }

        const response = {
            message: "Produtos adicionados com sucesso",
        }

        return response
    }

}