import React from "react";
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DiaogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


function Dialogs(props) {

    let state = props.store.getState().messagePage

    let dialogsElement = state.dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    let messageElement = state.messageData.map((message)=>{
       return <Message message={message.message}/>
    });

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
       props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;