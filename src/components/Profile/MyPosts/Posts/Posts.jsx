import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {

    let PostsData = props.state.ProfileElement.map ( p => <Post post={p.names} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement=''
    }

    return( <div>
        <div>
            avata + discriptin
        </div>

        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>

        { PostsData }


    </div>)
}

export default Posts;