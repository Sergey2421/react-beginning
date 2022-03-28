import React from "react";
import Css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem src={dialog.src} name={dialog.name} id={dialog.id}/>)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id}/>)

    function click() {
        props.addMessage();
    }

    function onMessageChange(e) {
        props.addText(e);
    }

    return (
        <div className={Css.dialogs}>
            <div className={Css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={Css.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newText}></textarea>
                </div>
                <div>
                    <button onClick={click}>Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;