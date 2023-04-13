import { Types, type Document } from 'mongoose'

export interface IClub extends Document {
    name: string
    description: string
    head: Types.ObjectId
    budget: number
    council: string
    email: string
    mentors: Types.ObjectId[]
    logo: Buffer
}
