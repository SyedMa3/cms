import { Router } from 'express'
import { registerUser } from '../controllers/users'

export const userRouter: Router = Router()

// userRouter.get('/login', getEvents)
userRouter.post('/register', registerUser)
// userRouter.delete('/:id', removeEvent)
