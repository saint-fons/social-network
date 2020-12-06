let rerenderEntireTree = () => {
    console.log("State was changed")
}

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
    SettingsPage: {
        SettingsElement: [
            {message: "1111111"},
            {message: "hello there"}
        ],
        addNewSetting: "Vyzyvai Natashu1111"
    },
    ProfilePage: {
        ProfileElement: [
            {names: "Abdul"},
            {names: "Natasha"}
        ],
        AddNewProfile: "lyaaaaa1"
    }

}

export let addProfile = () => {
    let newProfile = {
        names: state.ProfilePage.AddNewProfile
    }
    state.ProfilePage.ProfileElement.push(newProfile)
    state.ProfilePage.AddNewProfile = ''
    rerenderEntireTree(state)
}

export let addSetting = () => {
    let newSetting = {
        message: state.SettingsPage.addNewSetting
    }
    state.SettingsPage.SettingsElement.push(newSetting)
    state.SettingsPage.addNewSetting = ''
    rerenderEntireTree(state)
}

export let addNewSettingText = (newSetting) => {

    state.SettingsPage.addNewSetting = newSetting
    rerenderEntireTree(state)
}

export let addNewProfileText = (newProfile) => {

    state.ProfilePage.AddNewProfile = newProfile
    rerenderEntireTree(state)
}

export let addPost = () => {

    let newPost = {
        names: postMessage
    }
    state.ProfilePage.ProfileElement.push(newPost)
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

window.state = state

export default state