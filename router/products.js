var express =require('express'); 
var bodyParser =require('body-parser')
var ProductModel = require('../models/productmodel')
var router=express.Router() ; 

router.get('/all',function(req,res){

    ProductModel.find({},function(err,result){
        if(err){
            res.send({
                data:{},
                state:"no",
                msg:err
            })
        }else{
            res.send({
                data:{},
                state:"yes",
                msg:result
            })
        }
    })
})

router.post('/add',function(req,res){
    var product = new ProductModel({
        name:req.body.name,
        price:req.body.price
    });
    product.save(function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"saved baby"});
        }

    })
})

router.put('/update/:id',function(req,res){
    ProductModel.findByIdAndUpdate(req.params.id,{name:req.body.name,price:req.body.price,category:req.body.category},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"updated baby"});
        }
    })
})

router.delete('/remove/:id',function(req,res){
    ProductModel.remove({_id:req.params.id},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"deleted baby"});
        }
    })
})

module.exports=router;
