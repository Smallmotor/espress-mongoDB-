var express = require('express');
var router = express.Router();
var author = require("../common/author")

var Art = require('../model/Art');


router.use(author.renzheng)
router.use(author.un)
/* GET home page. */
router.get('/', function(req, res, next) {
    
    Art.find(function(err,data){
        res.render('art/arts',{arts:data});
    })
    
});
router.get('/rele', function(req, res, next) {
    res.render('art/rele');
});
router.get("/up/:id",function(req, res, next){
    Art.findOne({_id:req.params.id},function(err,data){
        res.render("art/up",{art:data})
    })  
})
router.get("/brow/:id",function(req, res, next){
    Art.findOne({_id:req.params.id},function(err,data){
        res.render("art/brow",{art:data})
    })  
})
router.post('/rele',function(req, res, next){
    
    var datas = req.body;
    Art.find({title:datas.title,},function(err,data){
        if(data.length==0){
          var art = new Art({
            title:datas.title,
            au:datas.au,
            txt:datas.txt,
            username:datas.username
          })
          art.save(function(err,data){
            if(err) {
              res.json({status:-1,msg:"发布失败"})
            }else{
                
              res.redirect("/art")
            }
          })
        }else{
          res.json({status:-1,msg:"文章标题已存在"})
        }
      })
})

router.post('/up',function(req,res,next){
    let {title,au,txt,id} = req.body;

    Art.update({_id:id},{title,au,txt},function(err){
        if(err) res.redirect("/err")
        res.redirect("/art")

    })
})
router.post('/del',function(req,res,next){
    let id = req.body.id;
    Art.remove({_id:id},function(err){
        if(err){
            res.json({status:-1})
        }else{
            res.json({status:1})
            
        }
    })
})
module.exports = router;




