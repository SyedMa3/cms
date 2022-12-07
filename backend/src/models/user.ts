import {model, Schema} from 'mongoose'
import {IUser} from './../types/user'

const userSchema: Schema = new Schema(
    {
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        name: {
            type: String
        }
    }
)

export default model<IUser>("User", userSchema)