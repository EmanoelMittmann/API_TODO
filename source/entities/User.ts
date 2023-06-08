import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import TodoTask from './Todo'

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

    @OneToMany(type => TodoTask, user => User)
        tasks: TodoTask[]
}
