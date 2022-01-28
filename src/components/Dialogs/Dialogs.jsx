import React from "react";
import Css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.dialogs.map(dialog => <DialogItem src={dialog.src} name={dialog.name} id={dialog.id}/>)
    let messageElements = props.messages.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={Css.dialogs}>
            <div className={Css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={Css.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;