import React from "react";
import Css from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={Css.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={Css.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Anton'},
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello World'},
        {id: 4, message: 'Yeah!'},
    ];

    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = messages.map(message => <Message message={message.message}/>)

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