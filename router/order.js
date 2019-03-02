var express =require('express'); 
var bodyParser =require('body-parser')
var OrderModel = require('../models/ordermodel')
var router=express.Router() ; 

router.get('/',function(req,res){

    res.send({"info":"welcome to my user server"});
})


router.get('/all',function(req,res){

    OrderModel.find({},function(err,result){
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
    var order = new OrderModel({
        name:req.body.name,
        descreption:req.body.descreption,
        user:req.body.user,
        products:req.body.products
    });
    order.save(function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"saved baby"});
        }

    })
})

router.put('/update/:id',function(req,res){
    OrderModel.findByIdAndUpdate(req.params.id,{name:req.body.name,descreption:req.body.descreption,user:req.body.user,products:req.body.products},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"updated baby"});
        }
    })
})

router.delete('/remove/:id',function(req,res){
    OrderModel.remove({_id:req.params.id},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"deleted baby"});
        }
    })
})


module.exports=router;
