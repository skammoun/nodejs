var mongoose=require('mongoose') ;

var schema=mongoose.Schema;

var SchemaModel=new schema({
    name:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
}); 

var CategoryModel = mongoose.model('Categories',SchemaModel);

module.exports=CategoryModel; 