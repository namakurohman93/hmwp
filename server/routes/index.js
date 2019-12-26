const router = require('express').Router();
const UserController = require('../controllers/user-controller');
const articleRouter = require('./article-router');
const { authenticate } = require('../middlewares/auth');

router.get('/', function(req, res, next) {
  res.json({ message: 'Server is alive!' });
});

router.use('/register', UserController.register);
router.use('/login', UserController.login);

router.use(authenticate);
router.use('/articles', articleRouter);

module.exports = router;
