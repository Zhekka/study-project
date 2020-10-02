import React from "react";
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DiaogItem";
import Message from "./Message/Message";


function Dialogs(props) {

    let dialogsElement = props.state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messageElement = props.state.messageData.map((message)=>{
       return <Message message={message.message}/>
    });


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;