var express =require('express'); 
var bodyParser =require('body-parser')
var UserModel = require('../models/usermodel');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var router=express.Router() ; 



router.get('/',function(req,res){

    res.send({"info":"welcome to my user server"});
})


router.get('/all',function(req,res){

    UserModel.find({},function(err,result){
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

router.post('/login',function(req,res){
    UserModel.findOne({email:req.body.email}, function(err, userInfo){
        if (err) {
         next(err);
        } else {
            if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
            }else{
                res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
        }
    })

})

router.post('/add',function(req,res){
    var user = new UserModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password
    });
    user.save(function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"saved baby"});
        }

    })
})

router.put('/update/:id',function(req,res){
    UserModel.findByIdAndUpdate(req.params.id,{firstName:req.body.firstName,lastName:req.body.lastName,phone:req.body.phone,email:req.body.email,password:req.body.password},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"updated baby"});
        }
    })
})

router.delete('/remove/:id',function(req,res){
    UserModel.remove({_id:req.params.id},function(err){
        if(err){
            res.send({state:"no",msg:err});
        }else{
            res.send({state:"yes",msg:"deleted baby"});
        }
    })
})


module.exports=router;
