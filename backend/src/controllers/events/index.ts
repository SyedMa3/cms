import { Request, Response } from "express"
import { IEvent } from "../../types/event"
import Event from "../../models/event"

const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events: IEvent[] = await Event.find()
        res.status(200).json({events})
    } catch (error) {
        throw error
    }   
}

const addEvent =async (req : Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const body = req.body as Pick<IEvent, "name" | "description">

        const event: IEvent = new Event({
            name: body.name,
            description: body.description,
            date: new Date()
        })

        const newEvent: IEvent = await event.save()

        res.status(201).json({event: newEvent})
    } catch(error) {
        throw error
    }
    
}

export { getEvents, addEvent }