import React from "react";
import Css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, addTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog => <DialogItem src={dialog.src} name={dialog.name} id={dialog.id}/>)
    let messageElements = props.messages.map(message => <Message message={message.message} id={message.id}/>)
    let newMessageElement = React.createRef();

    function click() {
        let action = addMessageActionCreator(newMessageElement.current.value);
        props.dispatch(action);
    }

    function onMessageChange() {
        let action = addTextActionCreator(newMessageElement.current.value, 'dialogsPage');
        props.dispatch(action);
    }

    return (
        <div className={Css.dialogs}>
            <div className={Css.dialogsItems}>
                {dialogElements}
            </div>
            <div className={Css.messages}>
                <div>
                    <textarea ref={newMessageElement} onChange={onMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={click}>Send
                    </button>
                </div>
                <div>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;