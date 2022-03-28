import React from "react";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
    return (
        <div>
            <Profile/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Main;