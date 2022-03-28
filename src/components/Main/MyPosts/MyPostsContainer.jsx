import React from "react";
import {addPostActionCreator, addTextActionCreator} from "../../../redux/main_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    function click() {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    function onPostChange(e) {
        let action = addTextActionCreator(e.target.value);
        props.store.dispatch(action);
    }
    return <MyPosts addText={onPostChange} addPost={click} mainPage={props.store.getState().mainPage}/>
}

export default MyPostsContainer;