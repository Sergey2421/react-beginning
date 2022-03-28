import React from "react";
import {addMessageActionCreator, addTextMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    function click() {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    function onMessageChange(e) {
        let action = addTextMessageActionCreator(e.target.value);
        props.store.dispatch(action);
    }

    return <Dialogs addText={onMessageChange} addMessage={click} dialogsPage={props.store.getState().dialogsPage}/>
}

export default DialogsContainer;