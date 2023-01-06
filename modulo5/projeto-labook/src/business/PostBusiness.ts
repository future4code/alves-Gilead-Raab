import { PostDatabase } from "../database/PostDatabase"
import { IPostInputDTO, IPostDB, Post, IGetPostsInputDTO, IGetPostsDBDTO, IGetPostsOutputDTO, IGetPostsPost } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async(input: IPostInputDTO) => {
        const {contentInput, tokenInput} = input

        const payload = this.authenticator.getTokenPayload(tokenInput)

        console.log(contentInput, tokenInput)

        if (!payload) {
            throw new Error("Token inválido")
        }

        const userId = payload.id

        if(!contentInput || contentInput.length < 1){
            throw new Error("Post inválido")
        }

        const postId =  this.idGenerator.generate()

        const post = new Post (
            postId,
            contentInput,
            userId,
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }

    public getAllPosts = async(input: IGetPostsInputDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "content"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido")
        }

        const getUsersInputDB: IGetPostsDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const postsDB = await this.postDatabase.getAllPosts(getUsersInputDB)

        const posts  = postsDB.map(postDB => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id,
            )

            const postResponse: IGetPostsPost = {
                id: post.getId(),
                content: post.getContent(),
                likes: post.getLikes()
            }

            return postResponse
        })

        const response: IGetPostsOutputDTO = {
            posts
        }

        return response
    }
}