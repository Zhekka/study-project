import React from "react";
import p from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/149071.png";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={p.ava}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>

                <h2>{props.profile.fullName}</h2>
                <div>About me: {props.profile.aboutMe}</div>
                <h3>{props.profile.lookingForAJobDescription}</h3>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


            </div>
        </div>
    );
}

export default ProfileInfo;