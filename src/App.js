import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav sideBar={props.store.getState().sideBar}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Main store={props.store}/>}/>
                    <Route path={`/dialogs/`}
                           element={<DialogsContainer store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
