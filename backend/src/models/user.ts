import { model, Schema, Types } from 'mongoose'
import { type IUser } from './../types/user'

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },

    phone: {
      type: String
    },

    rollno: {
      type: String,
      unique: true,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },
    
    clubs: [{
      type: Types.ObjectId,
      ref: 'Club'
    }]
  }
)

export default model<IUser>('User', userSchema)
