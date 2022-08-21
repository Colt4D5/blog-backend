const router = require('express').Router()

// controllers
const rootController = require('../controllers/rootController.js')

router
  .route('/')
    .get(rootController.getRoot)

module.exports = router