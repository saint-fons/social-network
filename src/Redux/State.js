let store = {
    _state: {

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
                {names: "Abdul"},
                {names: "Natasha"}
            ]
        },
        SettingsPage: {
            SettingsElement: [
                {message: "1111111"},
                {message: "hello there"}
            ],
            addNewSetting: "Vyzyvai Natashu1111"
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    addPost() {

        let newPost = {
            names: postMessage
        }
        this._state.ProfilePage.ProfileElement.push(newPost)
        this._state._callSubscriber(this._state)
    },

    addSetting() {

        let newSetting = {
            message: store._state.SettingsPage.addNewSetting
        }
        store._state.SettingsPage.SettingsElement.push(newSetting)
        store._state.SettingsPage.addNewSetting = ''
        store.rerenderEntireTree(store._state)
    },
    addNewSettingText(newSetting) {
        store._state.SettingsPage.addNewSetting = newSetting
        store._callSubscriber(store._state)
    },

    subscribe(observer) {
        store.rerenderEntireTree = observer
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {

        }
    }
}

window.store = store

export default store