import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ICreateShowOutputDTO, IShowInputDTO, Show } from "../models/Show"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public newshow = async(input: IShowInputDTO) => {
        const { token, band, date } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const id = this.idGenerator.generate()

        const [day, month, year] = date.split("/")
        const starts_at = new Date (`${month}/${day}/${year}`)

        const show = new Show (
            id,
            band,
            starts_at
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Evento criado com sucesso",
            show
        }
    }

}