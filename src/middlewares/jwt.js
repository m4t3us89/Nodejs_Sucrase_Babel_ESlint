import jsonwebtoken from 'jsonwebtoken'

export default async (req, res, next) => {
  try {
    const { token } = req.headers
    await jsonwebtoken.verify(token, 'shhh')
    return res.next()
  } catch (err) {
    return res.status(401).send({
      message: 'Acesso Negado'
    })
  }
}
