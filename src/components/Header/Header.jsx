import React from "react";
import h from './Header.module.css';



function Header() {
    return(
            <header className={h.header}>
                <img src="https://static.thenounproject.com/png/72-200.png" />
            </header>
    );
}

export default Header;