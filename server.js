var express =require('express'); 
var user = require('./router/user');
var product = require('./router/products');
var order = require('./router/order');
var logger = require('morgan');
var category = require('./router/category');
var db=require('./models/db') ; 
var app=express() ;
var bodyParser =require('body-parser') ;

app.set('secretKey', 'test'); // jwt secret token
app.use(logger('dev'));
app.use(bodyParser.json());
app.use("/users",user);
app.use("/prods",product);
app.use("/orders",order);
app.use("/categories",category);

app.get('/',function(req,res){
    res.send('bonjour');
});

app.get('/home',function(req,res){
    res.send('bonjour yassir');
});

app.listen(3000,function(){

    console.log("start");
});