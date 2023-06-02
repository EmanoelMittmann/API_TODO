import { Request, Response } from 'express'
import {hash, compare} from 'bcrypt'
import { userRepository } from '../repository/userRepository'
import jwt from 'jsonwebtoken'

export class UserController {
    async create(req: Request, res: Response){
        const {name, email, password} = req.body

        const userExist = await userRepository.findOneBy({email})

        if(userExist){
            throw new Error('E-mail ja existe')
        }

        const hashPassword = await hash(password, 10)
        
        const newUser = userRepository.create({
            name: name,
            email: email,
            password: hashPassword
        })
        
        await userRepository.save(newUser)

        const {password: _, ...user} = newUser

        return res.status(201).json(user)
    }

    async login(req: Request, res:Response) {
        const {email, password} = req.body

        const user = await userRepository.findOneBy({email})

        const verify = await compare(password, user.password)

        if(!verify || !user) throw new Error('Email ou senha Invalidos')

        const token = jwt.sign({id: user.id}, process.env.JWT_PASS ?? '', {
            expiresIn: '8h'
        })

        const {password: _, ...userLogin} = user

        return res.status(200).json({
            user: userLogin,
            token: token
        })
    }

    async ListUsers(req: any, res: Response){
        const users = await userRepository.find({
            select: {
                id: true,
                email:true,
                name:true
            },
            order: {
                id: 'ASC'
            },
            take: 5
        })
        res.status(200).send(users)
    }
}