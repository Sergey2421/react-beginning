import React from "react";
import Css from "./Main.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./Profile/Profile";

const Main = (props) => {
    return (
        <div>
            <Profile/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Main;