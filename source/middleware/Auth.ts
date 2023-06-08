import jwt, { JwtPayload } from 'jsonwebtoken'
import { userRepository } from '../repository/userRepository'
import { NextFunction, Request, Response } from 'express'

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if(!authorization) return res.status(401).send('Não Autorizado')

    const token = authorization.split(' ')[1]

    try {
        const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const user = await userRepository.findOneBy({id})
        
        if(!user){
            return res.status(401).send('Não Autorizado')
        }
    
    } catch (error) {
        res.status(401).send('Não Autorizado')
    }

    next()
}