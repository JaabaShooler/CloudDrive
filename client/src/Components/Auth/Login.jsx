import React from 'react';
import Input from "../../Utils/Input/Input";
import {login} from "../../API/user";
import {useDispatch} from "react-redux";
import '../Sass/Login.sass'

const Login = () => {


    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    return (
        <section className="login">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div className="box">
                <div className="form">
                    <div className="form__wrapper">
                        <h2 className="form__header">Login</h2>
                            <Input value={nickname} setValue={setNickname} type="text" placeholder="Enter your nickname"/>
                            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
                        <button className="form__button" onClick={() => dispatch(login(nickname, password))}>Login</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;