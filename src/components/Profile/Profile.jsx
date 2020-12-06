import React from 'react';
import Posts from "./MyPosts/Posts/Posts";


const Profile = (props) => {
    return <div>
        <Posts state={props.state}
               AddNewProfile={props.AddNewProfile}
               dispatch={ props.dispatch }
        />
    </div>
}

export default Profile;