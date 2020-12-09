import React from 'react';
import Post from "./Post/Post";
import {addProfileActionCreator, updateProfileActionCreator} from "../../../../Redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../../StoreContext";

const PostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().ProfilePage
                let addProfile = () => {
                    //props.addProfile(text)
                    store.dispatch(addProfileActionCreator())
                }
                let onProfileChange = (text) => {
                    /*let text = newProfileElement.current.value
                    props.addNewProfileText(text)*/
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
}

export default PostsContainer;