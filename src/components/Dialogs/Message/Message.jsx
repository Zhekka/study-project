import React from "react";
import d from "./../Dialogs.module.css";
import p from "../../Profile/ProfileInfo/ProfileInfo.module.css";

function Message(props) {

    // let newMessage = React.createRef();
    //
    // let addMessage = () =>{
    //     let text = newMessage.current.value;
    //     alert(text)
    // }

    return (
        <div>
            {/*<textarea ref={addMessage}>hi</textarea>*/}
        <div className={d.message}>{props.message}</div>
        </div>
    );
}
export default Message;