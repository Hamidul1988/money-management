import * as Types from './types'
import  Axios  from 'axios'


export const authaction = user=>dispatch=>{


 //console.log(serv)
    Axios.post("/api/users/register",user)
    .then(
        res=>{

            console.log(res)
        }
    )
    .catch(
        error=>{
            console.log(error.response.data)

            dispatch({type:Types.USERS_ERROR,  payload:{
                error:error.response.data}
            })
        })
    
}


