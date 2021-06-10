export function validate(email, password) {
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    return false
  }
  return true
}
