import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'Users'})
export default class User{
    @PrimaryGeneratedColumn({type: 'int'})
        id!: number

    @Column({type: 'text'})
        name!:string

    @Column({type: 'text'})
        email!:string

    @Column({type: 'text'})
        password!: string
}
