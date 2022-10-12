import { ProductDatabase } from "../database/ProductDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { IAddProductsInputDTO, IGetProductsDBDTO, IGetProductsFormattedDBDTO, IGetProductsInputDTO, IGetProductsOutputDTO, ITagDB, Product } from "../models/Products"


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
        console.log(productsDB)

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


    public getProductsV2 = async (input: IGetProductsInputDTO): Promise<IGetProductsOutputDTO> => {
        const search = input.search || ""
        const order = input.order || "id"
        const sort = input.sort || "ASC"


        const getProductsInputDB: IGetProductsDBDTO = {
            search,
            order,
            sort
        }
 
        const rawProductsFormatted: IGetProductsFormattedDBDTO[] = await this.productDatabase.getProductsFormatted(getProductsInputDB)

        const products: Product[] = []

        for (let rawProduct of rawProductsFormatted) {
            const productAlreadyOnArray = products
                .find((product: Product) => product.getId() === rawProduct.id)

            if (productAlreadyOnArray) {
                productAlreadyOnArray.getTags().push(rawProduct.product_tag)
            } else {
                const product = new Product (
                    rawProduct.id,
                    rawProduct.name,
                    [ rawProduct.product_tag ]
                )

                products.push(product)
            }
        }

        const response: IGetProductsOutputDTO = {
            products: products.map((product) => ({
                id: product.getId(),
                name: product.getName(),
                tags: product.getTags()
            }))
        }

        if (response.products.length <= 0){
            throw new NotFoundError("Nenhum produto encontrado")
        }

        return response
        
    }
}