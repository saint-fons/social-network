import React from 'react';
import user1 from './../../../../assets/imgs/user1.jpg'
import style from './../../Profile.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(props.profile == null || props.profile == undefined) {
        return Preloader
    }

    return (
        <div>
            <div>
                <img className={style.s} src={user1}  />
            </div>
            <div>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;