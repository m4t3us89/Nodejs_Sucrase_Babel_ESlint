import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import routesRoot from './app/routesRoot'
import * as Sentry from '@sentry/node'

const app = express()
dotenv.config()

Sentry.init({
  dsn: 'https://dc21ad777e7141c1a77919f583dd0709@sentry.io/1529577'
})

app.use(Sentry.Handlers.requestHandler())

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routesRoot.forEach(router => router(app))

app.use(Sentry.Handlers.errorHandler())

app.listen(process.ENV || 3333, () =>
  console.log(`On Server ${process.ENV || 3333}`)
)
