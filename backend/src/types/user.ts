import { Types, type Document } from 'mongoose'

export interface IUser extends Document {
  email: string
  password: string
  name: string
  rollno: string
  phone: string
  clubs: Types.ObjectId[]
}
