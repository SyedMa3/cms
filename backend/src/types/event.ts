import { type Document } from 'mongoose'

export interface IEvent extends Document {
  name: string
  description: string
  date: Date
}
