import { hashPassword } from '../../../lib/auth'
import { connectToDB } from '../../../lib/db'

import { validate } from './helpers'
import {
  DB_COLLECTIONS,
  DB_MESSAGES,
} from '../../../constants/db'

async function handler(req, res) {
  if (req.method !== 'POST') return

  const data = req.body
  const { email, password } = data

  if (!validate(email, password)) {
    res.status(422).json({
      message: DB_MESSAGES.INVALID_INPUT,
    })
    return
  }

  const client = await connectToDB()
  const db = client.db()

  const existingUser = await db
    .collection(DB_COLLECTIONS.USERS)
    .findOne({ email })

  if (existingUser) {
    res.status(422).json({
      message: DB_MESSAGES.USER_EXIST,
    })

    client.close()
    return
  }

  const hashedPassword = await hashPassword(
    password
  )
  console.log('hashedPassword', hashedPassword)
  const document = {
    email,
    password: hashedPassword,
  }
  const result = await db
    .collection(DB_COLLECTIONS.USERS)
    .insertOne(document)

  res
    .status(201)
    .json({ message: DB_MESSAGES.USER_CREATED })
}

export default handler
