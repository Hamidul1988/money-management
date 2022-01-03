const validator = require('validator')

let validate = user =>{
    let eror = {}

    if(!user.name){
        eror.name= "pleas provide Name"
    }


    if(!user.email){
        eror.email="please provide Email"
    }
    else if(!validator.isEmail(user.email)){
        eror.email = "please provide a valid email"
    }



    if(!user.password){
        eror.password= "please Enter password"

    }else if(!user.password.length > 6 ){
        eror.password= "please Enter Gater Then 6  Characters"
    }


    if(!user.confirmPassword){
        eror.confirmPassword="please confirm password "
    }else if(!user.password==user.confirmPassword){
        eror.confirmPassword=`password Doesn \'t confirm password Again`
    }
    

    return {

        eror,
        isValid:Object.keys(eror).length==0
    }
}
module.exports = validate