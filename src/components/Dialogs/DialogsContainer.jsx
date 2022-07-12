import React from "react";
import {addMessageActionCreator, addTextMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let dialogsPage = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let methods = (dispatch) => {
    return {
        addText: (e) => {
            dispatch(addTextMessageActionCreator(e.target.value));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(dialogsPage, methods)(Dialogs);

export default DialogsContainer;