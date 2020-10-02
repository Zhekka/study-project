import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'This is my second post', likesCount: 23},
            {id: 3, message: 'Hi everyone!', likesCount: 67}]
    },
    messagePage: {
        dialogsData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Petro'}],
        messageData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'yo'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Do you know me?'},
            {id: 5, message: 'By by'}]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.unshift(newPost);
    rerenderEntireTree(state);
}




export default state;