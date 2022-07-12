import {cloneDeep} from "lodash";

const ADD_POST = 'ADD_POST';
const ADD_TEXT = 'ADD_TEXT';

let initialState = {
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
};

export const main_reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                text: state.newText,
                likesCount: 10,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newText: '',
            }
        }
        case ADD_TEXT: {
            return {
                ...state,
                newText: action.text,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addTextActionCreator = (text) => {
    return {
        type: ADD_TEXT,
        text: text,
    };
}