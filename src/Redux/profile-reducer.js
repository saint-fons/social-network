const ADD_PROFILE = 'ADD-PROFILE';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';

let initialState = {
    ProfileElement: [
        {names: "Abdul"},
        {names: "Natasha"}
    ],
    AddNewProfile: "lyaaaaa1"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE: {
            let newProfile = {
                names: state.AddNewProfile
            }
            let stateCopy = {...state}
            stateCopy.ProfileElement = [...state.ProfileElement]
            stateCopy.ProfileElement.push(newProfile)
            stateCopy.AddNewProfile = ''
            return stateCopy
        }
        case UPDATE_NEW_PROFILE: {
            let stateCopy = {...state}
            stateCopy.AddNewProfile = action.newProfile
            return stateCopy
        }
        default :
            return state
    }

    return state
}

export const addProfileActionCreator = () => ({type: ADD_PROFILE})
export const updateProfileActionCreator = (text) =>
    ({ type: UPDATE_NEW_PROFILE, newProfile: text })

export default profileReducer