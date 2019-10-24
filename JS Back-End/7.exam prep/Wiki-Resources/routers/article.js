const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const articleValidator = require('../utils/validator')

router.get('/articles',controllers.article.get.all);

router.get('/create', auth(), controllers.article.get.create);

router.post('/create', auth(), articleValidator, controllers.article.post.create);

router.get('/details/:articleId', auth(), controllers.article.get.details);

router.get('/edit/:articleId', controllers.article.get.edit);

router.post('/edit/:articleId', controllers.article.post.edit);

router.get('/delete/:articleId', auth(), controllers.article.get.delete);

module.exports = router;