const router = require('express').Router()

const {login} = require('../controllers/usercontroler')


//Register
//http://localhost:4000/api/users/register
router.post('/register',(req,res)=>{

    res.json({
        message:"Hamid"
    })
})

//login
//http://localhost:4000/api/users/login
router.post('/login',login)






module.exports = router