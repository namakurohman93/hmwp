const User = require('../models/user')
const Article = require('../models/article')

class ArticleController {
  static createNewArticle(req, res, next) {
    let articleObj = null

    Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.payload.id,
      featuredImage: req.body.featuredImage,
    })
      .then(article => {
        articleObj = article
        return User.findByIdAndUpdate(req.payload.id, {
          $push: { articles: article._id },
        })
      })
      .then(user => {
        res.status(201).json(articleObj)
      })
      .catch(next)
  }

  static imageHandler(req, res, next) {
    if (req.body.image) {
      res.json({
        message: 'Upload file success',
        imageUrl: req.body.image,
      })
    } else next({ name: 'UploadFailed', message: 'Failed to upload image' })
  }

  static deleteArticle(req, res, next) {
    Article.findOneAndDelete({ _id: req.params.articleId })
      .then(article => {
        if (!article) throw { name: 'NotFound', message: 'Article not found' }
        return User.findOneAndUpdate(
          { _id: req.payload.id },
          { $pull: { articles: req.params.articleId } },
        )
      })
      .then(user => {
        res.json({ message: 'Success delete article' })
      })
      .catch(next)
  }

  static getAllArticles(req, res, next) {
    Article.find()
      .populate('author', 'username')
      .then(articles => {
        res.json({ articles })
      })
      .catch(next)
  }

  static getArticleDetail(req, res, next) {
    Article.findById(req.params.articleId)
      .populate('author', 'username -_id')
      .then(article => {
        if (!article) throw { name: 'NotFound', message: 'Article not found' }
        res.json({ article })
      })
      .catch(next)
  }

  static updateArticle(req, res, next) {
    Article.findById(req.params.articleId)
      .then(article => {
        if (!article) throw { name: 'NotFound', message: 'Article not found' }
        article.title = req.body.title || article.title
        article.content = req.body.content || article.content
        article.featuredImage = req.body.featuredImage || article.featuredImage

        return article.save()
      })
      .then(article => {
        res.json({ article })
      })
      .catch(next)
  }
}

module.exports = ArticleController
