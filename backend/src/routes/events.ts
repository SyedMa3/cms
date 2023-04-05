import { Router } from 'express'
import { addEvent, getEvents, removeEvent } from '../controllers/events/index'

export const eventRouter: Router = Router()

eventRouter.get('/', getEvents)
eventRouter.post('/', addEvent)
eventRouter.delete('/:id', removeEvent)
