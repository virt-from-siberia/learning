import { signIn } from 'next-auth/client'
import { useState, useRef } from 'react'

import { AUTH } from '../../constants/db'
import classes from './auth-form.module.css'

async function createUser(email, password) {
  const response = await fetch(
    '/api/auth/signup',
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  if (!response.ok)
    throw new Error(
      data.message || 'Something went wrong'
    )

  return data
}

function AuthForm() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true)
  const [pending, setPending] = useState(false)

  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState)
  }

  async function submitHandler(event) {
    event.preventDefault()
    setPending(true)

    const enteredEmail =
      emailInputRef.current.value
    const enteredPassword =
      passwordInputRef.current.value

    if (isLogin) {
      const result = await signIn(AUTH.METHOD, {
        redirect: false,
      })
    } else {
      try {
        const result = await createUser(
          enteredEmail,
          enteredPassword
        )
        setPending(false)
        console.log(result)
      } catch (error) {
        setPending(false)
        console.error(error)
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>
            Your Email
          </label>
          <input
            type='email'
            id='email'
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>
            Your Password
          </label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {pending ? (
          <p>...fetching</p>
        ) : (
          <div className={classes.actions}>
            <button>
              {isLogin
                ? 'Login'
                : 'Create Account'}
            </button>
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
              disabled={pending}
            >
              {isLogin
                ? 'Create new account'
                : 'Login with existing account'}
            </button>
          </div>
        )}
      </form>
    </section>
  )
}

export default AuthForm
