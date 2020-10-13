import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'This is my second post', likesCount: 23},
                {id: 3, message: 'Hi everyone!', likesCount: 67}],
            newPostText: ''
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
                {id: 5, message: 'By by'}],
            newMessageBody:''
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;// патерн observer
    },

    // або через приват методи визиваючи їх в dispatch

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = dialogsReducer(this._state.messagePage,action)

        this._callSubscriber(this._state)
    }
}





export default store;