import React from "react";
import Css from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Nav = (props) => {

    let friends = props.sideBar.friends.map(friend => <Friend src={friend.src} name={friend.name}/>);

    return (
        <nav className={Css.nav}>
            <div className={Css.item}>
                <NavLink to={'/profile'} className={current => {if (current.isActive) return Css.active}}>Profile</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/news'} className={current => {if (current.isActive) return Css.active}}>News</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/dialogs'} className={current => {if (current.isActive) return Css.active}}>Messages</NavLink>
            </div>
            <div className={Css.item}>
                <NavLink to={'/settings'} className={current => {if (current.isActive) return Css.active}}>Settings</NavLink>
            </div>
            <div className={Css.container}>
                <div>
                    <p>Friends</p>
                </div>
                <div className={Css.friends}>
                    {friends}
                </div>
            </div>
        </nav>
    )
}

export default Nav;