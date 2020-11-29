import React from 'react'
import style from "../../../Profile.module.css";

const Post = (props) => {

    return (
        <div>

            <div >
                <img className={style.s} src='https://miro.medium.com/max/1000/1*lg2T1GPqqUtb5NR2Wiv-5w.jpeg' alt="girl" />
            </div>

            <div>
                Posts: { props.post }
            </div>
        </div>
    )
}

export default Post;