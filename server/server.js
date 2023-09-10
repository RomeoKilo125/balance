import express from 'express'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`))
