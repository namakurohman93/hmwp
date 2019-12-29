const router = require('express').Router()

const UserController = require('../controllers/user-controller')
const ArticleController = require('../controllers/article-controller')

const userRouter = require('./user-router')
const articleRouter = require('./article-router')

const uploadImage = require('../middlewares/uploadImage')

router.get('/', function(req, res, next) {
  res.json({ message: 'Server is alive!' })
})

router.use('/register', UserController.register)
router.use('/login', UserController.login)

router.use('/users', userRouter)
router.use('/articles', articleRouter)
router.post(
  '/image',
  uploadImage.single('image'),
  ArticleController.imageHandler,
)

module.exports = router
