
const express = require('express');
const app = express();
const path = require('path');
const schilderijen = require('./data/schilderijen.json');
const port = 5000;


app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

app.use( express.static( "public" ) );



app.get('/', function(req,res){
  res.render('home', {

    posts: schilderijen.werken

  });
});

app.get('/paintings', function(req,res){
  res.render('paintings', {

    posts: schilderijen.werken

  });
});


app.get('/werken/:postid', function(req,res){
  res.render('detail', {

    post: schilderijen.werken[req.params.postid]
    
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get("/home", function(request, response){
  response.render("home", {
   
    posts: schilderijen.werken
  });
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));


