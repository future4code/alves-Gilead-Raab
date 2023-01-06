import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IGetPostsInputDTO, IPostInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
    
    public createPost = async(req: Request, res: Response) => {
        try{
            const tokenInput = req.headers.authorization as string
            const contentInput = req.body.content

            const newPostInput: IPostInputDTO = {
                contentInput,
                tokenInput
            }

            console.log(newPostInput)

            const response = await this.postBusiness.createPost(newPostInput)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    public getPosts = async(req: Request, res: Response) => {
        try{
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization as string,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.postBusiness.getAllPosts(input)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}