var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
    res.render('ejs',{ title: 'ejs' });
  });

    




module.exports = router;