import React from "react";
import Css from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={Css.dialogs}>
            <div className={Css.dialogsItems}>
                <div className={Css.dialog}>
                    Alex
                </div>
                <div className={Css.dialog}>
                    Vlad
                </div>
                <div className={Css.dialog}>
                    Dmitriy
                </div>
                <div className={Css.dialog}>
                    Roma
                </div>
            </div>
            <div className={Css.messages}>
                <div className={Css.message}>Hi</div>
                <div className={Css.message}>Hello world!</div>
                <div className={Css.message}>Good morning</div>
            </div>
        </div>
    )
}

export default Dialogs;