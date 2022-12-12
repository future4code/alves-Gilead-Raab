import { PokemonDatabase } from "../database/PokemonDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { IPokemonDB, IPokemonInputDTO, Pokemon } from "../models/Pokemon"


export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase,
    ) {}

    public addPokemon = async (pokemons: IPokemonInputDTO[]) => {
        for (let pokemon of pokemons){
            const pokemonDB: IPokemonDB = {
                id: pokemon.Row,
                name: pokemon.Name,
                Pokedex_Number: pokemon['Pokedex Number'],
                Img_name: pokemon['Img name'],
                Generation: pokemon.Generation,
                Evolution_Stage: pokemon['Evolution Stage'],
                Evolved: pokemon.Evolved,
                FamilyID: pokemon.FamilyID,
                Cross_Gen: pokemon["Cross Gen"],
                Type_1: pokemon["Type 1"],
                Type_2: pokemon["Type 2"],
                Weather_1: pokemon["Weather 1"],
                Weather_2: pokemon["Weather 2"],
                STAT_TOTAL: pokemon["STAT TOTAL"],
                ATK: pokemon.ATK,
                DEF: pokemon.DEF,
                STA: pokemon.STA,
                Legendary: pokemon.Legendary,
                Aquireable: pokemon.Aquireable,
                Spawns: pokemon.Spawns,
                Regional: pokemon.Regional,
                Raidable: pokemon.Raidable,
                Hatchable: pokemon.Hatchable,
                Shiny: pokemon.Shiny,
                Nest: pokemon.Nest,
                New: pokemon.New,
                Not_Gettable: pokemon["Not-Gettable"],
                Future_Evolve: pokemon["Future Evolve"],
                MAX_CP_LVL_40: pokemon["100% CP @ 40"],
                MAX_CP_LVL_39: pokemon["100% CP @ 39"]
            }

            await this.pokemonDatabase.insertPokemon(pokemonDB)

        }


        const response = {
            message: "Pokemons adicionados com sucesso",
        }

        return response
    }

    public getPokemons = async () => {
 
    }

}