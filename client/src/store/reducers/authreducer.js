
import * as Types from '../actions/types'


const init ={
 isauthinticated:false,
 user:{},
 error:{}
}
const authreducer =(state=init, action)=>{
 
    switch(action.type){
        case Types.SET_USER:{
            return {
            user:action.payload.user,
            isauthinticated:Object.keys(action.payload.user).length !==0,
            error:{}
        }}

        case Types.USERS_ERROR:{
            return {
           ...state,
           error:action.payload.error
        }}

        default: return state




    }
}
            
        
export default authreducer