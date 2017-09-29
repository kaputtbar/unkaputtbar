var express = require('express');
var router = express.Router();

//console.log('YAHOO!');

/* GET home page. */
router.get('/vignette/json_parser', function(req, res, next) {
	res.render('vignette/json_parser/json_parser', { title: 'Json Parser'});
	//console.log('...got the /vignette/json_parser something!!!!');
});

module.exports = router;
