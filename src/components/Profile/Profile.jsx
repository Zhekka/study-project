import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

function Profile(props) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText}
                     addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;