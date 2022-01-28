import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav friends={props.states.sideBar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Main posts={props.states.mainPage}/>}/>
                    <Route path={`/dialogs/`}
                           element={<Dialogs dialogs={props.states.dialogsPage} messages={props.states.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
