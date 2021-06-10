import { getSession } from 'next-auth/client'
import { connectToDB } from '../../../lib/db'
import {
  verifyPassword,
  hashPassword,
} from '../../../lib/auth'

import {
  AUTH,
  DB_COLLECTIONS,
  DB_MESSAGES,
} from '../../../constants/db'

async function handler(req, res) {
  if (req.method !== 'PATCH') return

  const session = await getSession({ req: req })

  //check is user authenticated
  if (!session) {
    res
      .status(401)
      .json({ message: AUTH.NOT_AUTHENTICATED })
    return
  }

  const userEmail = session.user.email
  const oldPassword = req.body.oldPassword
  const newPassword = req.body.newPassword

  const client = await connectToDB()
  const usersCollection = client
    .db()
    .collection(DB_COLLECTIONS.USERS)

  //check is user finned
  const user = await usersCollection.findOne({
    email: userEmail,
  })

  if (!user) {
    res.status(404).json({
      message: DB_MESSAGES.USER_NOT_FOUND,
    })
    client.close()
    return
  }

  const currentPassword = user.password

  const isPasswordsEqual = await verifyPassword(
    oldPassword,
    currentPassword
  )

  if (!isPasswordsEqual) {
    res.status(403).json({
      message: DB_MESSAGES.INVALID_PASSWORD,
    })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(
    newPassword
  )

  const result = await usersCollection.updateOne(
    {
      email: userEmail,
    },
    {
      $set: {
        password: hashedPassword,
      },
    }
  )
  client.close()
  res
    .status(200)
    .json({
      message: DB_MESSAGES.PASSWORD_SUCCESS,
    })
}

export default handler
