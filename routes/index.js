var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	//console.log("request is " + req.user.username);
	res.render('index', { title: "Assistant"});
});

module.exports = router;