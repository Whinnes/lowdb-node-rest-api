const express = require('express')
const morgan = require('morgan')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use(require('./routes/tasksRoutes'))

module.exports = app

