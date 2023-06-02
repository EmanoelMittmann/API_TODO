import jwt, { JwtPayload } from 'jsonwebtoken'
import { userRepository } from '../repository/userRepository'
import { NextFunction, Request, Response } from 'express'

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if(!authorization) throw new Error('Não Autorizado')

    const token = authorization.split(' ')[1]

    const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

    const user = await userRepository.findOneBy({id})

    if(!user){
        return res.status(401).send('Não Autorizado')
    }

    const {password: _, ...loggedUser} = user

    console.log(loggedUser)

    next()
}