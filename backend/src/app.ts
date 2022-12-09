import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import eventRoutes from './routes'
import dotenv from 'dotenv'
dotenv.config()

const app: Express = express()

const PORT: number = Number(process.env.API_PORT ?? 4000)

app.use(cors())
app.use(express.json())
app.use(eventRoutes)

const uri: string = process.env.MONGO_URI!

mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => 
            console.log(`Starting development server at http://127.0.0.1:${PORT}/`)
        )
    })
    .catch(err => {
        throw err
    })