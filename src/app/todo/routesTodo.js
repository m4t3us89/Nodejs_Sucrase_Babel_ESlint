import express from 'express'
import Todo from './'
import verifyToken from '../../middlewares/jwt'

const router = express.Router()

router.get('', verifyToken, Todo.list)

export default app => app.use('/todo', router)
