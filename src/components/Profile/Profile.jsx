import React from 'react';
import Posts from "./MyPosts/Posts/Posts";
import style from "./Profile.module.css"



const Profile = (props) => {
    let PostsData = props.state.ProfileElement.map ( p => <Posts post={p.names} />)
    return <div>
        <div >
            <img className={style.s} src='https://miro.medium.com/max/1000/1*lg2T1GPqqUtb5NR2Wiv-5w.jpeg' alt="girl" />
        </div>
        <div>
            avata + discriptin
        </div>

        { PostsData }

    </div>
}


export default Profile;