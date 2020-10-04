import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;