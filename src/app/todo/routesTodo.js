import express from 'express'
import Todo from './'

const router = express.Router()

router.get('', Todo.list)

export default app => app.use('/todo', router)
