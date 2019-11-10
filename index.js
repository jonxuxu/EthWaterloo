const express = require('express');

var app = express();
var http = require('http').Server(app);

app.use('/js', express.static(__dirname+'/js'));
app.use('/content', express.static(__dirname+'/content'));

app.get('/',function(req,res)
{
  res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 5000, function() {
  console.log('listening on port 5000 or server default');
});
