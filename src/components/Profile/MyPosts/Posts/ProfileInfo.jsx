import React from 'react';
import user1 from './../../../../assets/imgs/user1.jpg'
import style from './../../Profile.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={style.s} src={user1}  />
            </div>
            <div>
                <img src={props.profile.photos.large} />
                <img src={props.profile.photos.small} />
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}



export default ProfileInfo;