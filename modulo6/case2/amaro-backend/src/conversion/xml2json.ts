import * as fs from 'fs'
import * as xml2js from 'xml2js'
import * as path from 'path'
import * as util from 'util'
import { json } from 'stream/consumers'

const parser = new xml2js.Parser()

const productsRaw = path.resolve(__dirname, '../data/products.xml')

export const convertToJson = () => { fs.readFile(productsRaw, (err, data) => {
    parser.parseString(data, (err, result) => {
      //console.log(JSON.stringify(result, null, 4))
      console.log(result.products.element[0].tags)
    })
  })
}
