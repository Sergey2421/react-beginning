import {combineReducers, createStore} from "redux";
import {main_reducer} from "./main_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {sidebar_reducer} from "./sidebar_reducer";
import {users_reducer} from "./users_reducer";

let reducers = combineReducers({
        mainPage: main_reducer, dialogsPage: dialogs_reducer, sideBar: sidebar_reducer, usersPage: users_reducer
    }
);

let store = createStore(reducers);

export default store;