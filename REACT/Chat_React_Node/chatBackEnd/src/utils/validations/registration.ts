
import { check, validationResult } from 'express-validator'

export default [
    check('email').isEmail(),
    check('fullname').isLength({ min: 5 }),
    check('password').isLength({ min: 5 })
]