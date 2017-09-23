var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title : 'Article one| Muhammath',
    Heading : 'Arycle one',
    Content: " <p> Nulla ut fermentum risus. Curabitur sed odio fringilla mauris mollis finibus. Proin vel lacus elit. Phasellus tempor nisl eget ligula bibendum, ut cursus neque mollis. Duis vel risus nec odio rutrum rutrum at vitae risus. Ut posuere luctus luctus. Vestibulum massa metus, accumsan in nisl et, rutrum feugiat odio. Aliquam </p>   <p> Nulla ut fermentum risus. Curabitur sed odio fringilla mauris mollis finibus. Proin vel lacus elit. Phasellus tempor nisl eget ligula bibendum, ut cursus neque mollis. Duis vel risus nec odio rutrum rutrum at vitae risus. Ut posuere luctus luctus. Vestibulum massa metus, accumsan in nisl et, rutrum feugiat odio. Aliquam </p>    <p> Nulla ut fermentum risus. Curabitur sed odio fringilla mauris mollis finibus. Proin vel lacus elit. Phasellus tempor nisl eget ligula bibendum, ut cursus neque mollis. Duis vel risus nec odio rutrum rutrum at vitae risus. Ut posuere luctus luctus. Vestibulum massa metus, accumsan in nisl et, rutrum feugiat odio. Aliquam.</p> <p> Nulla ut fermentum risus. Curabitur sed odio fringilla mauris mollis finibus. Proin vel lacus elit. Phasellus tempor nisl eget ligula bibendum, ut cursus neque mollis. Duis vel risus nec odio rutrum rutrum at vitae risus. Ut posuere luctus luctus. Vestibulum massa metus, accumsan in nisl et, rutrum feugiat odio. Aliquam.</p> ",
};
function Templete (data)  {
    var title= data.title;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplete = 
    ' <html><head>     <title> ${title}   </title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" type="text/css" href=ui/style.css></head><body><div class="Container" id="contain">  <div>  <a href="/" >home</a></div> <hr><h3>${heading}</h3><div>${date}</div><div>${content}</div> </div></body></html>';
}

app.get('/', function (req, res) {
  res.sendFile=(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(templete(articleone));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
