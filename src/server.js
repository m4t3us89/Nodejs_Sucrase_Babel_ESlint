import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import routesRoot from './app/routesRoot'

const app = express()
dotenv.config()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routesRoot.forEach(router => router(app))

app.listen(8000, () => {
  console.log('On Server')
})
