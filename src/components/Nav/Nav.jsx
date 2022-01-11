import React from "react";
import Css from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={Css.nav}>
            <div className={Css.item}>
                <NavLink to={'/profile'} className={current => {if (current.isActive) return Css.active}}>Profile</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/news'} className={current => {if (current.isActive) return Css.active}}>News</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/messages'} className={current => {if (current.isActive) return Css.active}}>Messages</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/settings'} className={current => {if (current.isActive) return Css.active}}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;