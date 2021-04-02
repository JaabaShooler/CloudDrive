import React from 'react';
import Input from "../../Utils/Input/Input";
import {registration} from "../../API/user";
import "../Sass/Registration.sass"

const Registration = () => {

    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <section className="registration">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
            <div className="box">
                <div className="form">
                    <div className="form__wrapper">
                        <h2 className="form__header">Sing In</h2>
                            <Input value={nickname} setValue={setNickname} type="text" placeholder="Enter your nickname"/>
                            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
                        <button className="form__button" onClick={() => registration(nickname, password)}>Sign in</button>
                    </div>
                </div>
            </div>
        </section>
        // <section className="registration">
        //     <div className="registration__header">Registration</div>
        //         <Input value={nickname} setValue={setNickname} type="text" placeholder="Enter your nickname"/>
        //         <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
        //     <button className="registration__button" onClick={() => registration(nickname, password)}>Sign in</button>
        // </section>
    );
};

export default Registration;