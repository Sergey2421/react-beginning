import React from "react";
import Css from "./Main.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";

const Main = () => {
    return (
        <div>
            <Profile/>
            <MyPosts/>
        </div>
    )
}

export default Main;