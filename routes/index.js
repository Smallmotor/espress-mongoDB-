var express = require('express');



var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(req.session.user){
  res.render('index', { title: 'Express1' });
}else{
  res.redirect("/users/login")
}
 
});

router.get('/session', function(req, res, next) {
    res.end("session");
});
module.exports = router;
