import React from 'react'
import ProfileInfo from "./MyPosts/Posts/ProfileInfo";
import PostsContainer from "./MyPosts/Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {

    return <div>

        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />

        <PostsContainer
            profile={props.profile}
        />

    </div>
}

export default Profile;