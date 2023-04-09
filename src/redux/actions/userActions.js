import axios from "axios"
import api from "../api"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const registerUserAction = userData => async dispatch => {
    try {
        dispatch({type: USER_REGISTER_REQUEST})
        const {data} = await api.post("/users",userData)

        dispatch({type: USER_REGISTER_SUCCESS})
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, 
            payload:error.message || error})
        
    }
}

export const loginAction = ({email,password}) => async dispatch => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})
        const {data: users} = await api.get("/users")
        const result = users.find(
            item => item.email === email && 
            item.password === password && 
            item.active === true
            )
            if (!result) {
                dispatch({
                    type:USER_LOGIN_FAIL,
                    payload: "Email or Password wrong"
                })
            }else if(result.active === false){
                dispatch({
                    type:USER_LOGIN_FAIL,
                    payload: "Account is Blocked, Please contact admin"
                })
            }else{
                dispatch ({
                    type:USER_LOGIN_SUCCESS,
                    payload:result})
            }
            // ok
     } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error
        })
       
    }
}

export const logoutAction = () =>  dispatch => {
   dispatch ({type: USER_LOGOUT})
}
