import { App } from '../../connection'
import TodoTask from '../entities/Todo'

export const todoRepository = App.getRepository(TodoTask) 