class ArticleController {
  static createNewArticle(req, res, next) {
    res.json({message: 'welcome to create new article routes'});
  }
}

module.exports = ArticleController;
