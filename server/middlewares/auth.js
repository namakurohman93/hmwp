const User = require('../models/user')
const jwt = require('jsonwebtoken')
const Article = require('../models/article')

module.exports = {
  authenticate: function(req, res, next) {
    if (!req.headers.token) {
      return next({ name: 'BadRequest', message: 'Token is missing' })
    }

    try {
      const payload = jwt.verify(req.headers.token, process.env.JWT_SECRET)
      User.findById(payload.id)
        .then(user => {
          if (!user) throw { name: 'BadRequest', message: 'Bad token' }
          req.payload = payload
          next()
        })
        .catch(next)
    } catch (err) {
      if (err instanceof SyntaxError) {
        err = { name: 'BadRequest', message: 'Very very bad token' }
      }
      next(err)
    }
  },
  authorize: function(req, res, next) {
    Article.findById(req.params.articleId)
      .then(article => {
        if (!article) throw { name: 'NotFound', message: 'Article not found' }
        if (article.author != req.payload.id) {
          throw { name: 'NotAuthorized', message: 'You are not authorized' }
        }
        next()
      })
      .catch(next)
  },
}
