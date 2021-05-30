var express = require('../../')
  , app = express();

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');


app.set('view engine', 'html');

var users = [
    { name: 'tj', email: 'tj@sencha.com' }
  , { name: 'ciaran', email: 'ciaranj@gmail.com' }
  , { name: 'aaron', email: 'aaron.heckmann+github@gmail.com' }
];

app.get('/', function(req, res){
  res.render('users', { users: users });
});

app.listen(3000);
console.log('Express app started on port 3000');