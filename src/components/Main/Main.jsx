import React from "react";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
    return (
        <div>
            <Profile/>
            <MyPostsContainer />
        </div>
    )
}

export default Main;