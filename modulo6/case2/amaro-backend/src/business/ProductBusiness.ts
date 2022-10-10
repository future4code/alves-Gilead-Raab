import { ProductDatabase } from "../database/ProductDatabase"
import { IAddProductsInputDTO, IGetProductsOutputDTO, ITagDB, Product } from "../models/Products"


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

    public getProducts = async (): Promise<IGetProductsOutputDTO> => {

        const productsDB = await this.productDatabase.getProducts()

        const products: Product[] = []

        for (let productDB of productsDB) {
            const product = new Product(
                productDB.id,
                productDB.name,
                []
            )
            
            const tags = await 
                this.productDatabase.getTags(productDB.id)
            
            product.setTags(tags)

            products.push(product)
        }

        const response: IGetProductsOutputDTO = {
            products: products.map((product) => ({
                id: product.getId(),
                name: product.getName(),
                tags: product.getTags()
            }))
        }

        return response
    }

}