import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Main/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavContainer />
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/'} element={<ProfileContainer/>}/>
                    <Route path={`/dialogs/`}
                           element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
