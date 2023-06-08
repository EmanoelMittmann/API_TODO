import { Router } from 'express'
import {Auth} from './middleware/Auth'
import { UserController, TodoTaskController } from './controllers/Index'

const [
    { createTask, listTodos, update},
    { ListUsers, create, login, updateUser}
] = [new TodoTaskController(), new UserController()]

const routes = Router()

/* Users */
routes.post('/User', create)
routes.post('/Auth', login)
routes.get('/User', Auth, ListUsers)
routes.put('/User/:id', Auth, updateUser)

/* TodoTask */
routes.get('/ListTask', Auth, listTodos)
routes.post('/NewTask', Auth, createTask)
routes.put('/Task/:id', Auth, update)

export default routes 