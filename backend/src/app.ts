import express, { type Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/index'
dotenv.config()

const app: Express = express()

const PORT: number = Number(process.env.API_PORT ?? 4000)

app.use(cors())
app.use(express.json())

app.use(router)

const uri: string = process.env.MONGO_URI ?? 'ss'
console.log('here', PORT)
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => { console.log(`Starting development server at http://127.0.0.1:${PORT}/`) }
    )
  })
  .catch(err => {
    console.log(err)
    throw err
  })
