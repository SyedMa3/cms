import { model, Schema } from 'mongoose'
import { type IEvent } from './../types/event'

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

    date: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
)

export default model<IEvent>('Event', eventSchema)
