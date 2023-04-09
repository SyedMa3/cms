import { Router } from 'express'
import { registerUser } from '../controllers/users'
import passport from 'passport'

export const userRouter: Router = Router()

userRouter.get('/login', (req, res) => {
  res.send('login')
})
userRouter.post('/login', passport.authenticate('local', { failureRedirect: '/' }),
  (req, res) => {
    res.send('logged in')
  }
)
userRouter.post('/register', registerUser)
// userRouter.delete('/:id', removeEvent)
