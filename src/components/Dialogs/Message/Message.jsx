import React from "react";
import Css from "../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={Css.message}>{props.message}</div>
    )
}

export default Message;