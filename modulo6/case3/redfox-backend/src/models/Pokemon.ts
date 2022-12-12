export interface IPokemonDB {
	id: number,
    name: string,
    Pokedex_Number: number,
    Img_name: number,
    Generation: number,
    Evolution_Stage: number,
    Evolved: number,
    FamilyID: number,
    Cross_Gen: number,
    Type_1: string,
    Type_2: string,
    Weather_1: string,
    Weather_2: string,
    STAT_TOTAL: number,
    ATK: number,
    DEF: number,
    STA: number,
    Legendary: number,
    Aquireable: number,
    Spawns: number,
    Regional: number,
    Raidable: number,
    Hatchable: number,
    Shiny: number,
    Nest: number,
    New: number,
    Not_Gettable: number,
    Future_Evolve: number,
    MAX_CP_LVL_40: number,
    MAX_CP_LVL_39: number
}

export interface IPokemonInputDTO {
    Row: number,
    Name: string,
    'Pokedex Number': number,
    'Img name': number,
    Generation: number,
    'Evolution Stage': number,
    Evolved: number,
    FamilyID: number,
    'Cross Gen': number,
    'Type 1': string,
    'Type 2': string,
    'Weather 1': string,
    'Weather 2': string,
    'STAT TOTAL': number,
    ATK: number,
    DEF: number,
    STA: number,
    Legendary: number,
    Aquireable: number,
    Spawns: number,
    Regional: number,
    Raidable: number,
    Hatchable: number,
    Shiny: number,
    Nest: number,
    New: number,
    'Not-Gettable': number,
    'Future Evolve': number,
    '100% CP @ 40': number,
    '100% CP @ 39': number,
}

export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private pokedexNumber: number,
        private imgName: number,
        private generation: number,
        private evolutionStage: number,
        private evolved: number,
        private familyID: number,
        private crossGen: number,
        private type1: string,
        private type2: string,
        private wather1: string,
        private weather2: string,
        private statTotal: number,
        private atk: number,
        private def: number,
        private sta: number,
        private legendary: number,
        private aquireable: number,
        private spawns: number,
        private regional: number,
        private raidable: number,
        private hatchable: number,
        private shiny: number,
        private nest: number,
        private New: number,
        private notGettable: number,
        private futureEvolve: number,
        private maxCpLvl40: number,
        private maxCpLvl39: number
    ) {}
    
    public getId = () => {
        return this.id
    }
    
    public getName = () => {
        return this.name
    }


}

export interface IAddProductsInputDTO {
    id: number,
    name: string,
    tags: string[]
}
