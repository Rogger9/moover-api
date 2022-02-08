const express = require('express')
const cors = require('cors')
const logger = require('./middlewares/logger')
const invalidPath = require('./middlewares/invalidPath')
const app = express()
const { PORT } = process.env

app.set('port', PORT ?? 4000)

app.use(cors())
app.use(express.json())

app.use(logger)
app.use('/api/moover', require('./moover/routes'))

app.use(invalidPath)

module.exports = app
