const app = require('express')()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

module.exports = app