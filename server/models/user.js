const bcryptjs = require('bcryptjs')
const { Schema, model, models } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    maxlength: [15, 'Username max characters is 15'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [
      {
        validator: function(email) {
          return new Promise((resolve, reject) => {
            models.User.findOne({ email })
              .then(user => {
                if (user) resolve(false)
                resolve(true)
              })
              .catch(reject)
          })
        },
        msg: 'Email already registered',
      },
      {
        validator: function(email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            email.toLowerCase(),
          )
        },
        msg: 'Invalid email format',
      },
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password min 6 characters'],
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
})

userSchema.post('validate', function(user) {
  user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10))
})

const User = model('User', userSchema)

module.exports = User
