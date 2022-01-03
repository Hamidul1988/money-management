module.exports = {

    servereror(res,eror){
        consol.log(eror)

        res.status(500).json(
            {
                message:"Server Error Occurred"
            }
        
    )
        },

        ressourceeror(res,message){
           
    
            res.status(400).json(
                {
                    message
                }
            
        )
            }


}