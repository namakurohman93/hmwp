const {Schema, model} = require('mongoose');

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    featuredImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Article = model('Article', articleSchema);

module.exports = Article;
