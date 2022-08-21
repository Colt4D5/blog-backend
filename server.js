require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

// route imports
const rootRoutes = require('./routes/rootRoutes.js')
const blogRoutes = require('./routes/blogRoutes.js')

const app = express()

// db stuff
require('./middleware/db-init.js')

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//routes
app.use('/api/v1/blog', blogRoutes)
app.use('/', rootRoutes)

const port = process.env.PORT || 3000

app.listen(port, (req, res) => console.log(`Server listening on port ${port}`))