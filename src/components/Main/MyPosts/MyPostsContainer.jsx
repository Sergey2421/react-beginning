import React from "react";
import {addPostActionCreator, addTextActionCreator} from "../../../redux/main_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addText: (e) => {
            dispatch(addTextActionCreator(e.target.value));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;