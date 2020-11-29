import {rerenderEntireTree} from "../render";

let state = {

    DialogPage: {
        DialogElement: [
            {name: "Alexandra", id: 1, age: 19},
            {name: "Dmitri", id: 2, age: 18},
            {name: "Masha", id: 3, age: 25},
            {name: "Vikaaaa", id: 4, age: 18}
        ],
        MessageElement: [
            {message: "message 1", number: "number"},
            {message: "message 2", number: "number"},
            {message: "message 3", number: "number"},
            {message: "message 7", number: "number"}
        ]
    },

    ProfilePage: {
        ProfileElement: [
            {names: "hello_profile111"}
        ]
    },
    SettingsPage: {
        SettingsElement: [
            { message: "1111111"},
            { message: "hello there" }
        ]
    }

}


export let addSetting = (postSetting) => {
    let newSetting = {
        message: postSetting
    }
    state.SettingsPage.SettingsElement.push(newSetting)
    rerenderEntireTree()
}

export default state