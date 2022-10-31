import { compare, hash } from 'bcryptjs'

const HASH_LENGTH = 12

export async function hashPassword(password) {
  const hashPassword = await hash(
    password,
    HASH_LENGTH
  )
  return hashPassword
}

export async function verifyPassword(
  password,
  hashedPassword
) {
  const isValid = await compare(
    password,
    hashedPassword
  )
  return isValid
}
