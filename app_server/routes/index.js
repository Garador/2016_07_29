var express = require('express');
var router = express.Router();
var view_a = require('../controllers/view_1');
var view_b = require('../controllers/view_b');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/views/1', view_a.renderPage);
router.get('/views/b', view_b.renderPage);

module.exports = router;
