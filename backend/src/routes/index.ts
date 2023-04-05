import { Router } from 'express'
import { eventRouter } from './events'
import { userRouter } from './users'

export const router: Router = Router()

router.use('/events', eventRouter)
router.use('/users', userRouter)
