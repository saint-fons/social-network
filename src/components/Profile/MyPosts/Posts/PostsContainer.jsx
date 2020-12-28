import React from 'react';
import {addProfileActionCreator, updateProfileActionCreator} from "../../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

/*const PostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().ProfilePage
                let addProfile = () => {
                    //props.addProfile(text)
                    store.dispatch(addProfileActionCreator())
                }
                let onProfileChange = (text) => {
                    /!*let text = newProfileElement.current.value
                    props.addNewProfileText(text)*!/
                    let action = updateProfileActionCreator(text)
                    store.dispatch(action)
                }
                return <Posts
                    onProfileChange={onProfileChange}
                    addProfile={addProfile}
                    ProfilePage={state}
                    AddNewProfile={state.AddNewProfile}/>
            }
        }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return{
        AddNewProfile: state.ProfilePage.AddNewProfile,
        ProfilePage: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onProfileChange: (text) => {dispatch(updateProfileActionCreator(text))},
        addProfile: () => {dispatch(addProfileActionCreator())}
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default ProfileContainer;