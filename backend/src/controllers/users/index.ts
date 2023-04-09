import type { NextFunction, Request, Response } from 'express'
import type { IUser } from '../../types/user'
import User from '../../models/user'
import bcrypt from 'bcrypt'

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, 'email' | 'password' | 'name'>

    const hashedPassword = await bcrypt.hash(body.password, 12)

    const user: IUser = new User({
      email: body.email.toLowerCase(),
      name: body.name,
      password: hashedPassword
    })

    await user.save()
      .catch((err) => {
        console.log('err', err)
      })
      .then(() => {
        console.log('user created', body.email)
      })

    res.send('registered')
  } catch (error) {
    console.log(error)
    throw error
  }
}

const isAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

async function isValid (password: string, hash: string): Promise<boolean> {
  const result = await bcrypt.compare(password, hash)

  console.log('here')

  return result
}

const verifyCallback = async (email: string, password: string, done: any): Promise<void> => {
  User.findOne({ email })
    .then(async (user) => {
      console.log('lmao')
      const isValidPassword = await isValid(password, user?.password ?? '')

      if (isValidPassword) {
        return done(null, user)
      } else {
        console.log('yes')
        return done(null, false)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export { registerUser, isAuth, verifyCallback }
