import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <header className={h.header}>
            <img src="https://static.thenounproject.com/png/72-200.png"/>
            <div className={h.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;