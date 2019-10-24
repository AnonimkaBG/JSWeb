const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const modelValidator = require('../utils/validator')

router.get('/create', auth(), controllers.model.get.create);

router.post('/create', auth(), modelValidator, controllers.model.post.create);

router.get('/details/:modelId', auth(), controllers.model.get.details);

router.get('/edit/:modelId', auth(), controllers.model.get.edit);

router.post('/edit/:modelId', auth(), modelValidator, controllers.model.post.edit);

router.get('/delete/:modelId', auth(), controllers.model.get.delete);

module.exports = router;