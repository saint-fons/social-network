import {profileAPI, usersAPI} from "../api/api";
const ADD_PROFILE = 'ADD-PROFILE';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    ProfileElement: [
        {names: "Abdul"},
        {names: "Natasha"}
    ],
    AddNewProfile: "lyaaaaa1",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case ADD_PROFILE: {
            let newProfile = {
                names: state.AddNewProfile
            }
            stateCopy = {...state}
            stateCopy.ProfileElement = [...state.ProfileElement]
            stateCopy.ProfileElement.push(newProfile)
            stateCopy.AddNewProfile = ''
            return stateCopy
        }
        case UPDATE_NEW_PROFILE: {
            stateCopy = {...state}
            stateCopy.AddNewProfile = action.newProfile
            return stateCopy
        }

        case SET_STATUS: {
            stateCopy = {...state}
            stateCopy.status = action.status
            return stateCopy
        }


        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }
}

export const addProfileActionCreator = () =>
    ({type: ADD_PROFILE})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>
    ({type: SET_STATUS, status})
export const updateProfileActionCreator = (text) =>
    ({type: UPDATE_NEW_PROFILE, newProfile: text})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}




export default profileReducer