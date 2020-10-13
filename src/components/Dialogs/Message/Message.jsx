import React from "react";
import d from "./../Dialogs.module.css";
import p from "../../Profile/ProfileInfo/ProfileInfo.module.css";

function Message(props) {


    return (
        <div>

        <div className={d.message}>
            <textarea>{props.message}</textarea>

        </div>
        </div>
    );
}
export default Message;