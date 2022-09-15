const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


//Email: free@samuraijs.com
//
// Password: free
let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
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
                users: [...action.users],
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: !(state.isFetching),
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID });

export const unfollow = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleFetching = () => ({ type: TOGGLE_FETCHING });