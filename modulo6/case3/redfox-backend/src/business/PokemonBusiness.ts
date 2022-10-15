import { PokemonDatabase } from "../database/PokemonDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { Pokemon } from "../models/Pokemon"


export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase,
    ) {}

    public addPokemon = async (pokemons: Pokemon[]) => {


        const response = {
            message: "Produtos adicionados com sucesso",
        }

        return response
    }

    public getPokemons = async () => {
 
    }

}