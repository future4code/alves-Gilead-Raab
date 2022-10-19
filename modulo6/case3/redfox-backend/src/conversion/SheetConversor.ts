import * as xlsx from 'xlsx'
import * as path from 'path'
import { IPokemonInputDTO } from '../models/Pokemon'


export const pokemonsRaw = xlsx.readFile(path.resolve(__dirname, "../data/data.xlsx"))

export const convertToJson = (xlsxFile: xlsx.WorkBook): IPokemonInputDTO[] => {
  const data = xlsxFile.Sheets["Sheet1"]
  const pokemons: IPokemonInputDTO[] = xlsx.utils.sheet_to_json(data)
  return pokemons
}


// const data = pokemonsRaw.Sheets["Sheet1"]

// export const pokemons: IPokemonInputDTO[] = xlsx.utils.sheet_to_json(data)






