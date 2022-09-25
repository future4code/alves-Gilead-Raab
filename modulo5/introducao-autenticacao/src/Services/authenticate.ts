import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()


export class Authenticator{

  generateToken(id: string) {
    const token = jwt.sign({
      id: id
    },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1hr"
      }
    )
    
    return token

  }

  verifyToken(token: string){
    const verify = jwt.verify(token, process.env.JWT_KEY as string) as any

    return verify
  }
}