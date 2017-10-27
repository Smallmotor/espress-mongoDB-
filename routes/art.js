var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/arts', function(req, res, next) {
    res.render('art/arts');
  });
module.exports = router;