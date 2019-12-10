const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.movie.get);

router.get('/:id', controllers.movie.getOne);

router.post('/', auth(), controllers.movie.post);

router.put('/:id', auth(), controllers.movie.put);

router.delete('/:id', auth(), controllers.movie.delete);


module.exports = router;