import { Router } from 'express'
import {Auth} from './middleware/Auth'
import { UserController } from './controllers/UserController'

const routes = Router()

routes.post('/User', new UserController().create)
routes.get('/User', new UserController().ListUsers)
routes.post('/Auth', new UserController().login)
routes.use(Auth)

export default routes