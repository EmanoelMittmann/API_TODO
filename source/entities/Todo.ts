import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable} from 'typeorm'
import User from './User'

@Entity({name: 'TodoTask'})
export default class TodoTask{
    @PrimaryGeneratedColumn()
        id!:number

    @Column({type:'text'})
        Title!:string

    @Column({type:'text'})
        Description!: string

    @Column({type:'text'})
        categories: string

    @ManyToOne(type => User, lessons => TodoTask )
    @JoinColumn({name: 'user_id', foreignKeyConstraintName: 'user_id',referencedColumnName: 'id'})
        user: User
}