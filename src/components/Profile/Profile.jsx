import React from 'react';
import style from './Profile.module.css'
import Posts from "./MyPosts/Posts/Posts";



const Profile = () => {
    return <div>
        <div>
            <img src='https://miro.medium.com/max/1000/1*lg2T1GPqqUtb5NR2Wiv-5w.jpeg'/>
        </div>
        <div>
            avata + discriptin
        </div>

        <Posts />

    </div>
}


export default Profile;