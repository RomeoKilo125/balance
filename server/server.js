import 'dotenv/config'
import express from 'express'
import { db } from './config/connection.js'

const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

db.once('open', () => {
  app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`))
})
