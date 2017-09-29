var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/vignette/nervous_clock', function(req, res, next) {
	res.render('vignette/nervous_clock/nervous_clock', { title: 'Nervous Clock' });
});

module.exports = router;
