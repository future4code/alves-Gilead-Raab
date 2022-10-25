import { ProductDatabase } from "../database/ProductDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { IAddProductInputDTO, IGetProductDBDTO, IGetProductFormattedDBDTO, IGetProductInputDTO, IGetProductOutputDTO, IProductDB, ITagDB, Product } from "../models/Products"


export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
    ) {}

    public addProduct = async (products: IAddProductInputDTO[]) => {
        for (const item of products) {
            const product = new Product(
                item.id,
                item.name,
                item.tags
            )

            const isProductAlreadyRegistered: IProductDB | undefined = await this.productDatabase.searchById(item.id)

            if (isProductAlreadyRegistered) {
                throw new ConflictError(`já há um produto cadastrado com a ID ${isProductAlreadyRegistered.id}: ${isProductAlreadyRegistered.name}`)
            }


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

    public getProducts = async (input: IGetProductInputDTO): Promise<IGetProductOutputDTO> => {
        const search = input.search || ""
        const order = input.order || "id"
        const sort = input.sort || "ASC"


        const getProductsInputDB: IGetProductDBDTO = {
            search,
            order,
            sort
        }
 
        const rawProductsFormatted: IGetProductFormattedDBDTO[] = await this.productDatabase.getProductsFormatted(getProductsInputDB)

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

        const response: IGetProductOutputDTO = {
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