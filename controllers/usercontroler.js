const regvalidator = require('../validator/regvalidator')


module.exports = {

    login(req,res){

        let name = req.body.name
       let email = req.body.email
    res.json({
        message:`welcome${name} and ${email}`
    })},

    register(req,res){
        let {name,email,password,confirmPassword } = req.body

        let validate = regvalidator({name,email,password,confirmPassword})


        if(!validate.isValid){
            
            res.status(400).json(validate.eror)

            
        }else{

            res.status(200).json({
                message:`Everything ok`
            })
        }


    }


    
}