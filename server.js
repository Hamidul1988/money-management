const express = require("express")

const morgan = require("morgan")

const cors = require("cors")

const bodyparser = require("body-parser")

const app = express()
const Port = process.env.Port || 4000
app.use(morgan("dev"))
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.get("/",(req,res)=>{

res.json({
    message:"Welcome To my Website"
})
})

app.listen(Port,()=>{
    console.log(`Server is Runing ar ${Port}`)
})


