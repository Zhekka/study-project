import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let state= props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)// ctrl+alt+V create new variable
    }
    return (
        <div>
            <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}/>
        </div>)
}

export default MyPostsContainer;