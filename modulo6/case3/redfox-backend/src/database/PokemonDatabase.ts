import { IPokemonDB, Pokemon} from "../models/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokemonDatabase extends BaseDatabase {
    public static TABLE_POKEMONS = "Pokemons"



    public insertPokemon = async (pokemon: IPokemonDB): Promise<void> => {
        console.log(pokemon)
        await BaseDatabase
            .connection(PokemonDatabase.TABLE_POKEMONS)
            .insert(pokemon)
    }


    public getPokemons = async () => {

    }
}