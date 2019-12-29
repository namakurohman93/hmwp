const router = require('express').Router()
const ArticleController = require('../controllers/article-controller')
const { authenticate, authorize } = require('../middlewares/auth')

router.get('/', ArticleController.getAllArticles)
router.get('/:articleId', ArticleController.getArticleDetail)

router.use(authenticate)
router.post('/', ArticleController.createNewArticle)

router.use('/:articleId', authorize)
router.patch('/:articleId', ArticleController.updateArticle)
router.delete('/:articleId', ArticleController.deleteArticle)

module.exports = router
