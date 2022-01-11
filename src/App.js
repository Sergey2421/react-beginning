import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Main/>}/>
                        <Route path={'/messages'} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
);
}

export default App;
