import { Request, Response } from 'express'
import { todoRepository } from '../repository'
import TodoTask from '../entities/Todo'

export class TodoTaskController {
    async createTask(req: Request, res: Response){
        const {Title, Description, categories, user_id} = req.body

        const Task = todoRepository.create({
            categories: categories,
            Description: Description,
            Title:Title,
            user:user_id
        })

        try{
            await todoRepository.save(Task)
            return res.status(200).send('Task Criada com Sucesso')
        }
        catch (error) {
            return res.status(500).send(error)
        } 
    }

    async listTodos(req: Request, res: Response){
        const todo = await todoRepository.find({
            select: { 
                Title: true,
                Description: true,
                categories:true
            },
            take: 5
        })
        if(todo.length === 0) return res.status(404).send('Nenhuma Task encontrada')
        return res.status(200).send(todo)
    }

    async update(req: Request, res: Response){
        const [{...payload},{id}] = [req.body, req.params]

        try {
            await todoRepository
                .createQueryBuilder()
                .update(TodoTask)
                .set({
                    Title: payload.Title,
                    Description:payload.Description,
                    categories: payload.categories
                })
                .where('id = :id',{id:id})
                .execute()
            return res.status(200).send('Task atualizada com sucesso')
        } catch (error) {
            return res.status(422).send(error)
        }
    }
}