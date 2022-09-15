const router = require('express').Router();
const ThreadController = require('../controllers/threadController');

const { spotify } = require('../helpers/helpers');
const errorHandler = require('../middlewares/errorHandler');

const thread = require('./thread');
const user = require('./user');
// const thread = require('./thread');

//landing page

router.get('/', ThreadController.getThread);

router.use('/user', user);

router.use('/thread', thread);

router.use(errorHandler);

module.exports = router;
