const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

class UserController {
  static register(req, res, next) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(user => {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        res.status(201).json({ token, username: user.username })
      })
      .catch(next)
  }

  static login(req, res, next) {
    const errors = []

    if (!req.body.email) errors.push('Email is required')
    if (!req.body.password) errors.push('Password is required')

    if (errors.length > 0) return next({ name: 'BadRequest', message: errors })
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          throw { name: 'BadRequest', message: 'Email is not registered' }
        }
        if (!bcryptjs.compareSync(req.body.password, user.password)) {
          throw { name: 'BadRequest', message: 'Email or password is wrong' }
        } else {
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
          res.json({ token, username: user.username })
        }
      })
      .catch(next)
  }

  static getUserArticles(req, res, next) {
    User.findById(req.payload.id)
      .select('articles, -_id')
      .populate('articles')
      .then(articles => {
        if (!articles) throw { name: 'BadRequest', message: 'Bad token' }
        res.json(articles)
      })
      .catch(next)
  }
}

module.exports = UserController
