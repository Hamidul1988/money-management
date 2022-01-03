
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const regvalidator = require('../validator/regvalidator')
const logvalidator = require('../validator/loginvalidator')
const User = require('../models/user')

const {servereror,ressourceeror } = require('../Util/erorr')


module.exports = {


    login(req,res){

            let {email,password } = req.body;

         let validator = logvalidator({email,password})

         if(!validator.isValid){
             return res.status(400).json(validator.eror)

                }

                User.findOne({email})
                .then(user =>{

                    if(!user){

                        return ressourceeror(res,"User Not Found")
                    
                       }

                       bcrypt.compare(password,user.password,(eror,result)=>{
                            if(eror){
                           return servereror(res,eror)
                        
                            }

                       if(!result) {

                               return ressourceeror(res, "password Not Meath ")
                           }


                           let token = jwt.sign({
                               _id:user._id,
                               name:user.name,
                               email:user.email
                           },"Hamidul",{expiresIn:'2h'})

                           res.status(200).json({
                               message:"Login Sucessful",

                               token: `Beraar ${token}`

                           })

                       })   





                }

                  

                )
                .catch(
                    eror=>ressourceeror(res,eror)
                )


        
    
    },


    register(req,res){
        let {name,email,password,confirmPassword } = req.body

        let validate = regvalidator({name,email,password,confirmPassword})


        if(!validate.isValid){
            
           return res.status(400).json(validate.eror)

            
        }else{

            User.findOne({email})

            .then(user=>{
                 console.log(user)
                
                if(user){
                    return ressourceeror(res,"User Allredy Existed")
                    
                    
                   
                }
                
              
                bcrypt.hash(password,11,(eror,hash)=>{
                    if(eror){
                       return  eror=>servereror(res,eror)
     
                    }
                    let users = new User({
                        name,
                        email,
                        password:hash   
                    })
    
                    users.save()
                    .then( user =>{
                        res.status(201).json({
                            message:"User created Sucessfully",
                            user
                         } )
                         
                    }
                       


                    )
                    .catch(
                        eror=>servereror(res,eror)
                    )

                })


                
                
                



            })
            .catch(eror=>servereror(res,eror))
        }


    }


    
}