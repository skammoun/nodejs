var mongoose=require('mongoose') ;

var schema=mongoose.Schema;

var SchemaModel=new schema({
    name:{
        type:String,
        trim:true
    },
    price:{
        type:String,
        trim:true
    },
    category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Categories"
    }
}); 

var ProductModel = mongoose.model('Products',SchemaModel);

module.exports=ProductModel; 