const SET_USER_DATE = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const auth_reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATE: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
                }
            }
        default:
            return state;
    }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATE, data });