const router = require('express').Router();
const ArticleController = require('../controllers/article-controller');

router.post('/', ArticleController.createNewArticle);

module.exports = router;
