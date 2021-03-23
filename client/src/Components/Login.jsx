import React from 'react';
import Input from "../Utils/Input/Input";
import {login} from "../API/user";
import {useDispatch} from "react-redux";

const Login = () => {


    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    return (
        <div className="login">
            <div className="login__header">Login</div>
            <Input value={nickname} setValue={setNickname} type="text" placeholder="Enter your nickname"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
            <button className="login__button" onClick={() => dispatch(login(nickname, password))}>Login</button>
        </div>
    );
};

export default Login;