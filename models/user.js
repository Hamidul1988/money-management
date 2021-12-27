const mongose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
 const Scema = mongose.Schema
 const userscema = new Scema({

    name:{
        type:String,

        required:true ,
        trim:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
    type:String,
    required:true
    },
    balance:Number,
    income:Number,
    expense:Number,
    transaction:{
        type:[
            {
                type:Scema.Types.ObjectId,
                ref:"Transaction"
            }
        ]
    }


 })

 const User = mongose.model("User",userscema)

module.exports = User


