import React from "react";
import Css from "./Header.module.css"

const Header = () => {
    return (
        <header className={Css.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
        </header>
    )
}

export default Header;