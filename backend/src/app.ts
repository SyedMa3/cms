import express, { type Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/index'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import passport from 'passport'
import { verifyCallback } from './controllers/users'
import { Strategy as LocalStrategy } from 'passport-local'
import User from './models/user'

dotenv.config()

const app: Express = express()

const PORT: number = Number(process.env.API_PORT ?? 4000)

app.use(cors())
app.use(express.json())

const uri: string = process.env.MONGO_URI ?? 'ss'

const sessionStore = new MongoStore({
  mongoUrl: uri
})

app.use(session({
  secret: process.env.secret ?? 'gebberwh4htf',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}))

const strategy = new LocalStrategy({ usernameField: 'email' }, verifyCallback)

passport.use(strategy)
passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user)
    })
    .catch(err => { done(err) })
})

app.use(passport.initialize())
app.use(passport.session())
app.use(router)

// console.log('here', PORT)
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
