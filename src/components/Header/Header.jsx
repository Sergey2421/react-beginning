import React from "react";
import Css from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={Css.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>

            <div className={Css.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;