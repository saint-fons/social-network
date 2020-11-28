import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {


    return <div>
        <div>
            <Post post={props.post} />
        </div>
    </div>
}

export default Posts;