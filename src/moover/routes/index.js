const { Router } = require('express')
const { get } = require('../controllers')
const router = Router()

router.route('/')
  .get(get)
router.route('/orders')
  .get(get)
router.route('/tracking')
  .get(get)

module.exports = router
