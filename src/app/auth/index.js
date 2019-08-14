import jsonwebtoken from 'jsonwebtoken'
import express from 'express'

const router = express.Router()

router.post('', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: 'Email ou Password não informado.' })
    }
    // verificar banco
    const user = { email }
    const token = await jsonwebtoken.sign({ email }, 'shhh')
    return res.status(201).send({ token, user })
  } catch (err) {
    return res.status(400).send({
      message: 'Requisição não processada'
    })
  }
})

export default app => app.use('/auth', router)
