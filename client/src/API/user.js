import axios from "axios";
import {setUser} from "../Reducers/userReducer";

export const registration = async (nickname, password) => {
    try{
        const response = await axios.post('http://localhost:5000/api/auth/registration', {nickname, password})
        alert(response.data)
    }catch (e){
        alert(e.response.data.message)
    }
}

export const login = (nickname, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login',
                {
                    nickname,
                    password
                });
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data.user)
        }catch (e){
            alert(e.response.data.message)
        }
    }
}


export const auth = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/api/auth/auth',
                {
                    headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
                });
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data.user)
        }catch (e){
            alert(e)
            localStorage.removeItem('token')
        }
    }
}