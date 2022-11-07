import * as fs from 'fs'
import * as xml2js from 'xml2js'
import * as path from 'path'
import { IAddProductInputDTO } from '../models/Products'

const parser = new xml2js.Parser()

const productsXMLRaw = path.resolve(__dirname, '../data/products.xml')

export const convertToJson = () => { fs.readFile(productsXMLRaw, (err, data) => {
    parser.parseString(data, (err, result) => {
      const productsRAWJson = result.products
      console.log(productsRAWJson)

      const productsArray: IAddProductInputDTO[] = []

      productsRAWJson.map((product: any) => {
        const id: number = Number(product.id[0])
        const name: string = product.name[0]
        const tags: string[] = product.tags[0].element

        const newProduct: IAddProductInputDTO = {
          id,
          name,
          tags
        }

        productsArray.push(newProduct)
      })

      const products = {
        products: productsArray
      }

      console.log(products)
    })
  })
}
