export interface IProductDB {
    id: number,
    name: string
}

export interface ITagDB {
    tag_name: string
}

export interface IProductTagDB {
    product_id: number,
    product_tag: string
}

export class Product {
    constructor(
        private id: number,
        private name: string,
        private tags: string[]
    ) {}
    
    public getId = () => {
        return this.id
    }
    
    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: string) => {
        this.name = newId
    }

    public setTags = (newTags: string[]) => {
        this.tags = newTags
    }

    public addTag = (newTag: string) => {
        this.tags.push(newTag)
    }

    public removeTag = (TagToRemove: string) => {
        return this.tags.filter(tag => tag !== TagToRemove)
    }
}

export interface IAddProductsInputDTO {
    id: number,
    name: string,
    tags: string[]
}


export interface IGetProductsInputDTO {
    search: string,
    order: string,
    sort: string,
}

export interface IGetProductsOutputDTO {
    products: {
        id: number,
        name: string,
        tags: string[]
    }[]
}

export interface IGetProductsFormattedDBDTO {
    id: number,
    name: string,
    product_id: number,
    product_tag: string
}

export interface IGetProductsDBDTO {
    search: string,
    order: string,
    sort: string
}