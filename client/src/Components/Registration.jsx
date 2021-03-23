import React from 'react';
import Input from "../Utils/Input/Input";
import {registration} from "../API/user";

const Registration = () => {

    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div className="registration">
            <div className="registration__header">Registration</div>
            <Input value={nickname} setValue={setNickname} type="text" placeholder="Enter your nickname"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
            <button className="registration__button" onClick={() => registration(nickname, password)}>Sign in</button>
        </div>
    );
};

export default Registration;