import React from 'react';
import Posts from "./MyPosts/Posts/Posts";


const Profile = (props) => {



    return <div>

        <Posts state={props.state} addPost={props.addPost} />

    </div>
}


export default Profile;