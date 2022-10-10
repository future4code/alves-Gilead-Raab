import { IProductDB, IProductTagDB, ITagDB, Product } from "../models/Products"
import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_PRODUCTS_TAGS = "Amaro_Products_Tags"

    public toProductDBModel = (product: Product): IProductDB => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }

        return productDB    
    }

    public toProductTagDBModel = (productId: number, tag: string): IProductTagDB => {
        const productTagDB: IProductTagDB = {
            product_id: productId,
            product_tag: tag
        }

        return productTagDB    
    }


    public addProduct = async (product: Product): Promise<void> => {
        const productDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(productDB)
    }

    public searchByTag = async (tag: string): Promise<ITagDB | undefined> =>  {
        const tagDB: ITagDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_TAGS)
            .select()
            .where({ tag_name: tag })

        return tagDB[0]
    }

    public addTag = async (tag: string): Promise<void> => {

        await BaseDatabase
            .connection(ProductDatabase.TABLE_TAGS)
            .insert({tag_name: tag})
    }

    public addProductTags = async (productId: number, tag: string): Promise<void> => {
        const productTagDB = this.toProductTagDBModel(productId, tag)

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS_TAGS)
        .insert(productTagDB)
    }



    public getProducts = async (): Promise<IProductDB[]> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result
    }

    public getTags = async (productId: number): Promise<string[]> => {
        const result: IProductTagDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS_TAGS)
            .select("product_tag")
            .where({ product_id: productId })

        return result.map(item => item.product_tag)
    }

    // public getProductsFormatted = async (): Promise<any> => {
    //     const [result] = await BaseDatabase
    //         .connection.raw(`
    //             SELECT * FROM Amb_Pizzas
    //             JOIN Amb_Pizzas_Ingredients ON Amb_Pizzas_Ingredients.pizza_name = Amb_Pizzas.name;
    //         `)

    //     return result
}