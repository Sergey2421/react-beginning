import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavContainer />
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Main/>}/>
                    <Route path={`/dialogs/`}
                           element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
