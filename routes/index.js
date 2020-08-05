var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });  Hide the auto generated one and replace with our app
  res.redirect('/catalog');
});

module.exports = router;
