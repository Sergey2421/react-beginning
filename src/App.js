import React from "react";
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Main />
        </div>
    );
}

export default App;