import React from 'react';
import Post from "./Post/Post";

const Posts = (props) => {
    return <div>
        <div>
            <Post message={props.message} />
        </div>
    </div>
}

export default Posts;