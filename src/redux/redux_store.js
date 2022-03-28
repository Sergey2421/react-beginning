import {combineReducers, createStore} from "redux";
import {main_reducer} from "./main_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {sidebar_reducer} from "./sidebar_reducer";

let reducers = combineReducers({
        mainPage: main_reducer, dialogsPage: dialogs_reducer, sideBar: sidebar_reducer
    }
);

let store = createStore(reducers);

export default store;