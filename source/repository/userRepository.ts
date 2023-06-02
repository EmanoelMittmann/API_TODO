import { App } from '../../connection'
import User from '../entities/User'

export const userRepository = App.getRepository(User)

