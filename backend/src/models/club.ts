import { model, Schema, Types } from 'mongoose'
import { type IClub } from './../types/club'

const clubSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        head: {
            type: Types.ObjectId,
            required: true,
            ref: 'User'
        },

        budget: {
            type: Number
        },

        council: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        mentors: [{
            type: Types.ObjectId,
            ref: 'User'
        }],

        logo: {
            type: Buffer
        }
    },
    { timestamps: true }
)

export default model<IClub>('Event', clubSchema)
