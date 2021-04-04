import React from 'react';
import {NavLink, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Reducers/userReducer";
import "../Sass/NavBar.sass"
import logo from "../../Logo.png"







const NavBar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()



    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <img src={logo} alt="Logo"/>
                <div className='navbar__wrapper--links'>
                    {!isAuth && <div><NavLink to="/login">Login</NavLink></div>}
                    {!isAuth && <div><NavLink to="/registration">Sign in</NavLink></div>}
                    {isAuth && <div onClick={() => dispatch(logout())}>Logout</div>}
                </div>

            </div>
        </div>
    );
};

export default NavBar;