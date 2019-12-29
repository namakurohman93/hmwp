module.exports = function(err, req, res, next) {
  let errors = []

  switch (err.name) {
    case 'ValidationError':
      Object.keys(err.errors).forEach(key => {
        errors.push(err.errors[key].message)
      })
      res.status(400).json({ errors })
      break

    case 'BadRequest':
      if (Array.isArray(err.message)) {
        errors = errors.concat(err.message)
      } else {
        errors.push(err.message)
      }
      res.status(400).json({ errors })
      break

    case 'JsonWebTokenError':
    case 'UploadFailed':
      res.status(400).json({ errors: [err.message] })
      break

    case 'NotAuthorized':
      res.status(401).json({ errors: [err.message] })
      break

    case 'NotFound':
      res.status(404).json({ errors: [err.message] })
      break

    default:
      res.status(500).json(err)
      break
  }
}
