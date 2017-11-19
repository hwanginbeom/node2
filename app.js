var express = require('express')
var app = express()

app.get('/', function(req , res){
  res.send('Hello World!!')111
})


app.get('/test', function(req , res){
  res.send('test!!!!!!')}
)

app.listen(3000, function(){
  console.log('server is running ... port 3000');

})
