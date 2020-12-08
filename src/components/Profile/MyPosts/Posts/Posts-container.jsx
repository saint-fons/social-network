import React from 'react';
import Post from "./Post/Post";
import {addProfileActionCreator, updateProfileActionCreator} from "../../../../Redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState().ProfilePage

    let addProfile = () => {
        //props.addProfile(text)
        props.store.dispatch(addProfileActionCreator())
    }

    let onProfileChange = (text) => {
        /*let text = newProfileElement.current.value
        props.addNewProfileText(text)*/
        let action = updateProfileActionCreator(text)
        props.store.dispatch(action)
    }

    return ( <Posts onProfileChange={onProfileChange}
                   addProfile={addProfile}
                   ProfilePage={state}
                   AddNewProfile={state.AddNewProfile}

    />)
}

export default PostsContainer;