import type { Request, Response } from 'express'
import type { IEvent } from '../../types/event'
import Event from '../../models/event'

const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events: IEvent[] = await Event.find()
    res.status(200).json({ events })
  } catch (error) {
    console.log(error)
    throw error
  }
}

const addEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body)
    const body = req.body as Pick<IEvent, 'name' | 'description' | 'date'>

    const event: IEvent = new Event({
      name: body.name,
      description: body.description,
      date: body.date
    })

    const newEvent: IEvent = await event.save()

    res.status(201).json({ event: newEvent })
  } catch (error) {
    console.log(error)
    throw error
  }
}

const removeEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    // const event: IEvent | null = await Event.findByIdAndRemove(
    //   req.params.id
    // )
    res.status(200).json({
      message: 'Event deleted'
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getEvents, addEvent, removeEvent }
