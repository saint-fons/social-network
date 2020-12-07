const ADD_PROFILE = 'ADD-PROFILE';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            let newProfile = {
                names: state.AddNewProfile
            }
            state.ProfileElement.push(newProfile)
            state.AddNewProfile = ''
            break;
        case UPDATE_NEW_PROFILE:
            state.AddNewProfile = action.newProfile
            break;
        default : return state
    }

    return state
}

export const addProfileActionCreator = () => ({type: ADD_PROFILE})
export const updateProfileActionCreator = (text) =>
    ({ type: UPDATE_NEW_PROFILE, newProfile: text })

export default profileReducer