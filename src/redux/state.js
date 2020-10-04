let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'This is my second post', likesCount: 23},
                {id: 3, message: 'Hi everyone!', likesCount: 67}],
            newPostText: '12'
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
        debugger;
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else {
            console.log('missing despatch')
        }


    }


}

export default store;