const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to MongoDB'));