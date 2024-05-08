const express = require('express')
const router = express.Router()

const registerAfiliation = require('../Controller/AddAfiliation')

router.route('/addafiliation').post(registerAfiliation)

module.exports = router;