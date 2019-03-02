var express =require('express'); 
var bodyParser =require('body-parser')
var CategoryModel = require('../models/categorymodel')
var router=express.Router() ; 

router.get('/',function(req,res){

    res.send({"info":"welcome to my user server"});
})


router.get('/all',function(req,res){

    CategoryModel.find({},function(err,result){
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
    var category = new CategoryModel({
        name:req.body.name,
        description:req.body.description
    });
    category.save(function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"saved baby"});
        }

    })
})

router.put('/update/:id',function(req,res){
    CategoryModel.findByIdAndUpdate(req.params.id,{name:req.body.name,description:req.body.description},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"updated baby"});
        }
    })
})

router.delete('/remove/:id',function(req,res){
    CategoryModel.remove({_id:req.params.id},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"deleted baby"});
        }
    })
})


module.exports=router;
