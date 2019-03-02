var mongoose=require('mongoose') ;
var bcrypt = require('bcrypt');
var schema=mongoose.Schema;
const saltRounds = 10;

var SchemaModel=new schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required: true
    },
    password:{
        type:String,
        trim:true,
        required: true
    }
}); 


// hash user password before saving into database
SchemaModel.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

var UserModel = mongoose.model('Users',SchemaModel);

module.exports=UserModel; 