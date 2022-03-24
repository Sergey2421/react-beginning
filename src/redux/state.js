const ADD_POST = 'ADD-POST';
const ADD_TEXT = 'ADD-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let store = {
    _state: {
        mainPage: {
            posts: [
                {
                    id: 1,
                    text: 'My name is Sergey',
                    likesCount: 1,
                    src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'
                },
                {
                    id: 2,
                    text: 'Hello World!',
                    likesCount: 15,
                    src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
                }
            ],
            newText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qHjZXkfmcLaH7ihwf_ACefM7Z4xhbzMUjA&usqp=CAU'},
                {id: 2, name: 'Egor', src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Dima', src: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'},
                {id: 4, name: 'Vlad', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJh01X4pOeldEaBQi2D8SQbjxLYMQJ7scOw&usqp=CAU'},
                {id: 5, name: 'Andrey', src: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'},
                {id: 6, name: 'Anton', src: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/12/27/izobrazhenie_viber_2020-12-27_17-34-45.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hello World'},
                {id: 4, message: 'Yeah!'},
            ],
            newText: '',
        },
        sideBar: {
            friends: [
                {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qHjZXkfmcLaH7ihwf_ACefM7Z4xhbzMUjA&usqp=CAU', name: 'Alex'},
                {src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', name: 'Egor'},
                {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJh01X4pOeldEaBQi2D8SQbjxLYMQJ7scOw&usqp=CAU', name: 'Vlad'},
            ]
        }
    },
    _callSubscriber(){},
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    /*addText(text) {
        this._state.mainPage.newText = text;
        this._callSubscriber(this);
    },
    addPost() {
        let newPost = {
            id: 3,
            text: this._state.mainPage.newText,
            likesCount: 10,
        };

        this._state.mainPage.posts.push(newPost);
        this._state.mainPage.newText = '';
        this._callSubscriber(this);
    },*/
    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 3,
                    text: this._state.mainPage.newText,
                    likesCount: 10,
                };

                this._state.mainPage.posts.push(newPost);
                this._state.mainPage.newText = '';
                this._callSubscriber(this);
                break;
            }
            case ADD_TEXT: {
                this._state[action.label].newText = action.text;
                this._callSubscriber(this);
                break;
            }
            case ADD_MESSAGE: {
                let newMessage = {
                    id: 99,
                    message: this._state.dialogsPage.newText,
                };

                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newText = '';
                this._callSubscriber(this);
                break;
            }
            default:
                break;
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addTextActionCreator = (text, label) => {
    return {
        type: ADD_TEXT,
        text: text,
        label: label,
    };
}

export const addMessageActionCreator = (messageText) => {
    return {
        type: ADD_MESSAGE,
        message: messageText,
    }
}

export default store;