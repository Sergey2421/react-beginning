import React from "react";
import Css from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={Css.dialog}>
            <img src={props.src}/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;