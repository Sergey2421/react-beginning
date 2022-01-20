import React from "react";
import Css from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, text: 'My name is Sergey', likesCount: 1, src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'},
        {id: 2, text: 'Hello World!', likesCount: 15, src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'}
    ];

    let postElements = posts.map(post => <Post src={`${post.src}`} message={post.text} likesCount={post.likesCount}/>)

    return (
        <div className={Css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={Css.posts}>
                {postElements}
            </div>
        </div>)
}

export default MyPosts;