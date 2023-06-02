import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm'

export enum categories{
    'WARN',
    'FINISH',
    'PENDING'
}

@Entity({name: 'Todo_Task'})
export default class TodoTask{
    @PrimaryGeneratedColumn()
        id!:number

    @Column({type:'text'})
        title!:string

    @Column({type:'text'})
        description!: string

    @Column({
        type: 'enum',
        enum: categories
    })
        role: categories
}