import React from 'react';
import s from "./Settings.module.css";
import Setting from "./Settings/Setting"




const Songs = (props) => {

    let MessageData = props.addSetting.SettingsElement.map( s  => <Setting message={s.message} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement = ""
    }



    return <div className={s.settings}>
        { MessageData }
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={ addPost }>Add Message</button>
        </div>
    </div>
}


export default Songs;