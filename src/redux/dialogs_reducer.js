const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE';

let initialState = {
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
};

export const dialogs_reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TEXT_MESSAGE: {
            state.newText = action.text;
            return state;
        }
        case ADD_MESSAGE: {
            let newMessage = {
                id: 99,
                message: state.newText,
            };

            state.messages.push(newMessage);
            state.newText = '';
            return state;
        }
        default:
            return state;
    }
}

export const addTextMessageActionCreator = (text) => {
    return {
        type: ADD_TEXT_MESSAGE,
        text: text,
    };
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}