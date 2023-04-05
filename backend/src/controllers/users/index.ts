import { type Request, type Response } from 'express'
import { type IUser } from '../../types/user'
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

    const newUser: IUser = await user.save()

    // const token = jwt.sign(
    //     {
    //         user_id: user._id,
    //         email: body.email
    //     },
    //     process.env.TOKEN_KEY!,
    //     {
    //         expiresIn: "1h"
    //     }
    // )
    res.status(201).json({ newUser })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { registerUser }
