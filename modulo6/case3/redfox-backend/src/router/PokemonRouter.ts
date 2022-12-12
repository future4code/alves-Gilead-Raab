import { Router } from 'express'
import { PokemonBusiness } from '../business/PokemonBusiness'
import { PokemonController } from '../controller/PokemonController'
import { PokemonDatabase } from '../database/PokemonDatabase'

export const pokemonRouter = Router()

const pokemonController = new PokemonController(
    new PokemonBusiness(
        new PokemonDatabase()
    ) 
)

pokemonRouter.post("/new", pokemonController.addPokemon)

pokemonRouter.get("/", pokemonController.getPokemons)

