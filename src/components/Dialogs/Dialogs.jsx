import React from "react";
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DiaogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


function Dialogs(props) {

    let state = props.messagePage;

    let dialogsElement = state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    });

    let messageElement = state.messageData.map((message) => {
        return <Message message={message.message} key={message.id}/>
    });

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea value={newMessageBody}
                              placeholder='Enter your message here'
                              onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;