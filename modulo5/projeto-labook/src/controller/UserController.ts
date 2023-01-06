import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async(req: Request, res: Response) => {
        try{
            const signupInput: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(signupInput)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    public login = async(req: Request, res: Response) => {
        try{
            const loginInput: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(loginInput)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    

}