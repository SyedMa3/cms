import { model, Schema } from 'mongoose'
import {IEvent} from './../types/event'

const eventSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },
    },
    { timestamps: true}
)

export default model<IEvent>("Event", eventSchema)