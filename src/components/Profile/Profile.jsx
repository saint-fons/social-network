import React from 'react'
import PostsContainer from "./MyPosts/Posts/Posts-container";


const Profile = (props) => {
    return <div>
        <PostsContainer store={props.store} />
            {/*{state={props.state}
               AddNewProfile={props.AddNewProfile}
               dispatch={ props.dispatch } }
               />*/}

    </div>
}

export default Profile;