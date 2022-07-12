const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [

    ]
};

export const users_reducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userID) return {
                        ...e,
                        followed: true,
                    };
                    return e;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((e) => {
                    if (e.id === action.userID) return {
                        ...e,
                        followed: false,
                    };
                    return e;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, action.users],
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });

export const setUsersAC = (users) => ({ type: SET_USERS, users });
