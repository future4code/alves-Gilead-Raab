import { ProductDatabase } from "../database/ProductDatabase"
import { IAddProductsInputDTO, ITagDB, Product } from "../models/Products"


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

            for (const tag of item.tags) {
                const doesTagAlreadyExist: ITagDB | undefined = await this.productDatabase.searchByTag(tag)
                
                if (!doesTagAlreadyExist) {
                    await this.productDatabase.addTag(tag)
                }

                await this.productDatabase.addProductTags(item.id, tag)
            }
        }

        const response = {
            message: "Produtos adicionados com sucesso",
        }

        return response
    }

}