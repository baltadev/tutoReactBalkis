var express = require('express');
var negotiate = require('express-negotiate');
var router = express.Router();


router.get('/', function(req,res,next){
    res.render('content-negotiation',{ title: 'content-negotiation' });
});

router.get('/', function(req, res, next) {
    req.negotiate({
          'json': function() {
            res.send('{ message: "Hello World" }');
        }
        , 'html': function() {
            res.send('<html><body><h1>Hello World</h1></body></html>');
        }
        , 'default': function() {
            
            res.send('<html><body><h1>Hello World</h1></body></html>');
        }
    });
});

module.exports = router;