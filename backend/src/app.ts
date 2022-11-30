import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import eventRoutes from './routes'

const app: Express = express()

const PORT: number = 4000

app.use(cors())
app.use(eventRoutes)

const uri: string = `mongodb://127.0.0.1:27017/cms-db`

mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => 
            console.log('ss')
        )
    })
    .catch(err => {
        throw err
    })