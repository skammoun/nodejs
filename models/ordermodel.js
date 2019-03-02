var mongoose=require('mongoose') ;

var schema=mongoose.Schema;

var SchemaModel=new schema({
    name:{
        type:String,
        trim:true
    },
    descreption:{
        type:String,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    }]
}); 

var OrderModel = mongoose.model('Orders',SchemaModel);

module.exports=OrderModel; 