const validator = require('validator')

let loginvalidate = user =>{
    let eror = {}

    

    if(!user.email){
        eror.email="please provide Email"
    }
    else if(!validator.isEmail(user.email)){
        eror.email = "please provide a valid email"
    }



    if(!user.password){
        eror.password= "Please Enter password"

    }


   

    return {

        eror,
        isValid:Object.keys(eror).length==0
    }
}
module.exports = loginvalidate