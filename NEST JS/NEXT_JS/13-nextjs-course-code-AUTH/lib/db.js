import { MongoClient } from 'mongodb'

const CONNECTION_STRING =
  'mongodb+srv://alex:uN6xItg8o0DDY6wn@cluster0.qunp1.mongodb.net/auth-demo?retryWrites=true&w=majority'

export async function connectToDB() {
  const client = await MongoClient.connect(
    CONNECTION_STRING
  )
  return client
}

