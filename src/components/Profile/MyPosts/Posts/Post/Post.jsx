import React from 'react'



const Post = (props) => {

    return (
        <div>
            <div>
                Post 1: { props.post.names }
            </div>
        </div>
    )
}

export default Post;