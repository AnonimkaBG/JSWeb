const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.watchlist.get);

router.post('/', auth(), controllers.watchlist.post);

router.put('/:id', auth(), controllers.watchlist.put);

router.delete('/:id', auth(), controllers.watchlist.delete);


module.exports = router;