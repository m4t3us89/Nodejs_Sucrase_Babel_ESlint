import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(3000, () => {
  console.log('On Server')
})

function ver () {
  console.log('entrou')
}

ver()
