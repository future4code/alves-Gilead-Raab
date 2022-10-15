import { IPokemonDB, Pokemon} from "../models/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokemonDatabase extends BaseDatabase {
    public static TABLE_POKEMONS = "Pokemons"


    public toProductDBModel = (product: Pokemon) => {
        // const pokemonDB: IPokemonDB = {
        //     id: pokemon.getId(),
        //     name: pokemon.getName()
        // }

        // return pokemonDB    
    }


    public addPokemons = async (pokemon: Pokemon): Promise<void> => {
        const productDB = this.toProductDBModel(pokemon)

        await BaseDatabase
            .connection(PokemonDatabase.TABLE_POKEMONS)
            .insert(productDB)
    }


    public getPokemons = async () => {

    }
}