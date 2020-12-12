const FOLLOW = 'ADD-PROFILE';
const UNFOLLOW = 'UPDATE-NEW-PROFILE';
const setUsers = 'SET_USERS';

let initialState = {
    users: [

    ]
}

const usersReducer = (state = initialState, action) => {

    let stateCopy
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case setUsers:
            return {...state, users: [...state.users, ...action.users ]}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: setUsers, users})

export default usersReducer