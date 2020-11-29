import React from 'react'



const Post = (props) => {

    let addPost = () => {
        alert("HEY!")
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                Post 1: { props.post.names }
            </div>
        </div>
    )
}

export default Post;