import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { connectToDB } from '../../../lib/db'
import { verifyPassword } from '../../../lib/auth'

import {
  DB_COLLECTIONS,
  DB_MESSAGES,
} from '../../../constants/db'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDB()

        const usersCollection = client
          .db()
          .collection(DB_COLLECTIONS.USERS)

        const user =
          await usersCollection.findOne({
            email: credentials.email,
          })

        if (!user)
          throw new Error(
            DB_MESSAGES.USER_NOT_FOUND
          )

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )

        if (!isValid)
          throw new Error(
            DB_MESSAGES.COULD_NOT_LOGIN
          )

        client.close()

        return {
          email: user.email,
        }
      },
    }),
  ],
})
