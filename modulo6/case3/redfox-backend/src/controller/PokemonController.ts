import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseError } from "../errors/BaseError";
import { Pokemon } from "../models/Pokemon";

export class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ) {}

    public addPokemon = async (req: Request, res: Response) => {
        try {


        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getPokemons = async (req: Request, res: Response) => {
        try {

        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}