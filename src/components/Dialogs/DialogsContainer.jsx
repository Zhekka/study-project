import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

function DialogsContainer(props) {

    let state = props.store.getState().messagePage;

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <div>
            <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state}/>

        </div>)
}

export default DialogsContainer