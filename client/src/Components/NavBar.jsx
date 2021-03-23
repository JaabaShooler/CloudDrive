import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../Reducers/userReducer";

const NavBar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="navbar__wrapper">
                <img src="" alt="Logo"/>
                <div>
                    {!isAuth && <div><NavLink to="/login">Login</NavLink></div>}
                    {!isAuth && <div><NavLink to="/registration">Sign in</NavLink></div>}
                    {isAuth && <div onClick={() => dispatch(logout())}>Logout</div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;