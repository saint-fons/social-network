import React from 'react';
import Post from "./Post/Post";
import {addProfileActionCreator, updateProfileActionCreator} from "../../../../Redux/profile-reducer";

const Posts = (props) => {
    let PostsData = props.ProfilePage.ProfileElement.map( p =>
        <Post post={p.names} />
        )

    let newProfileElement = React.createRef();

    let addProfile = () => {
        props.addProfile()
        //props.dispatch(addProfileActionCreator())
    }

    let onProfileChange = () => {
        let text = newProfileElement.current.value
        props.onProfileChange(text)
        /*let action = updateProfileActionCreator(text)
        props.dispatch(action)*/
    }

    return( <div>
        <div>
            avata + discriptin
        </div>

        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={ onProfileChange }
                          ref={ newProfileElement }
                          value={ props.AddNewProfile }
                />
            </div>
            <div>
                <button onClick={ addProfile }>Add post</button>
            </div>
        </div>

        { PostsData }


    </div>)
}

export default Posts;