var router = require('express').Router();

//this is where the routes go
router.use('/api', require('./api'));
router.use('/admin', require('./admin'));

module.exports = router;
