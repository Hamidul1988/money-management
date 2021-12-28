module.exports = {

    login(req,res){

        let name = req.body.name
       let email = req.body.email
    res.json({
        message:`welcome${name} and ${email}`
    })},

    register(req,res){
        let {name,email,password,confirmPassword } = req.body
        
    }


    
}