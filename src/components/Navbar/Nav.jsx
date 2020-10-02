import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



function Nav() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}` }>
                <div><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
                <div><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
                <div><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
            </div>
        </nav>
    );
}

export default Nav;