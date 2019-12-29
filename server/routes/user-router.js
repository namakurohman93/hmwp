const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const { authenticate } = require('../middlewares/auth')

router.use(authenticate)
router.get('/articles', UserController.getUserArticles)

module.exports = router
