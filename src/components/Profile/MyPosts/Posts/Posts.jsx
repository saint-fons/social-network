import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {


    let PostsData = props.state.ProfileElement.map( p =>
        <Post post={p.names} />
        )

    let newProfileElement = React.createRef();

    let addProfile = () => {
        let text = newProfileElement.current.value;
        props.addProfile(text)
    }

    let onProfileChange = () => {
        let text = newProfileElement.current.value
        props.addNewProfileText(text)
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