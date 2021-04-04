import React from 'react';
import Input from "../../Utils/Input/Input";
import {login} from "../../API/user";
import {useDispatch} from "react-redux";
import '../Sass/Login.sass'

const Login = () => {


    const [nickname, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    function move(el, event, speed){
        el.style.transform  =  `translateX(${(event.clientX - window.screen.width/2) * -speed}px) 
                                translateY(${(event.clientY - window.screen.height/2) * speed}px)`
    }

    function selection(box, e, speedArr){
        for(let i = 0; i < box.length; i++){
            move(box[i], e, speedArr[i])
        }
    }

    React.useEffect(()=>{
        const box = document.querySelectorAll('.box--item');
        const speedArr = []
        for(let i = 0; i <= box.length; i++){
            speedArr.push(Math.random()*0.01 + i*0.01)
        }
        document.body.addEventListener('mousemove', e=>{
            selection(box, e, speedArr)
        })
        return () => {
            document.body.removeEventListener('mousemove', e => {})
        }
    },[])

    return (
        <section className="login">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                <div className="box--item"></div>
                <div className="box--item"></div>
                <div className="box--item"></div>
                <div className="box--item"></div>
                <div className="box--item"></div>
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